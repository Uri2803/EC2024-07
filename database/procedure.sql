
-- Hash password


CREATE FUNCTION HashPassword(Password VARCHAR(300))
RETURNS VARCHAR(64)
BEGIN
    DECLARE HashedPassword VARCHAR(64);
    SET HashedPassword = LOWER(HEX(SHA2(Password, 256)));
    RETURN HashedPassword;
END;
---------------------


--Login
CREATE OR REPLACE PROCEDURE LOGIN(
    IN email VARCHAR(255),
    IN password VARCHAR(100)
)
BEGIN
    DECLARE userRole VARCHAR(20) DEFAULT '';
    DECLARE hashedPassword VARCHAR(64);
    SET hashedPassword = HashPassword(password);
    IF EXISTS (SELECT 1 FROM Account WHERE Account.Email = email AND UserPassword = hashedPassword) THEN
        SELECT Account.Role INTO userRole FROM Account WHERE Account.Email = email LIMIT 1;
        IF userRole = 'Customer' THEN
            SELECT AC.Username, AC.Role, C.CustomerID
            FROM Account AC
            JOIN Customers C ON C.Email = AC.Email
            WHERE AC.Email = email;
        ELSEIF userRole = 'Employee' THEN
            SELECT AC.Username, AC.Role, E.EmployeeID
            FROM Account AC
            JOIN Employees E ON E.Email = AC.Email
            WHERE AC.Email = email;

        END IF;
    ELSE
        -- Raise error if login fails
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Tài khoản hoặc mật khẩu không đúng';
    END IF;
END;


--CALL LOGIN('nguyen.van.abc@example.com', 'password11');
CREATE OR REPLACE PROCEDURE GET_USSER_INFOR(
    IN email VARCHAR(255),
    IN role VARCHAR(10)
)
BEGIN
   IF role = 'Customer' THEN
        SELECT CT.*, AC.Username
        FROM Customers CT 
        JOIN Account AC ON AC.Email =  CT.Email
        WHERE CT.Email = email;
    ELSEIF role = 'Employee' THEN
        SELECT E.*, AC.Username
        FROM Employee E 
        JOIN Account AC ON AC.Email =  CT.Email
        WHERE E.Email = email;
    ELSE 
     SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Không có quyền truy cập';
    END IF;
END;

---- Register 
CREATE OR REPLACE PROCEDURE REGISTER(
    IN email VARCHAR(255),
    IN username VARCHAR(100),
    IN password VARCHAR(100)
)
BEGIN
    DECLARE hashedPassword VARCHAR(64);
    DECLARE CustomerID VARCHAR(10);
    DECLARE NextID INT;

    SET hashedPassword = HashPassword(password);
    IF NOT EXISTS (SELECT * FROM Account WHERE Account.Email = email) THEN
        SELECT COUNT(Customers.CustomerID) + 1 INTO NextID FROM Customers;
        SET CustomerID = CONCAT('KH', RIGHT(CONCAT('0000', CAST(NextID AS CHAR(6))), 4));
        INSERT INTO Account(Email, UserPassword, username, Role)
        VALUES (email, hashedPassword, username, 'Customer');
        INSERT INTO Customers (CustomerID, Email)
        VALUES (CustomerID, email);
    ELSE 
        SIGNAL SQLSTATE '45000' SET MESSAGE_TEXT = 'Không có quyền truy cập';
    END IF;
END;

