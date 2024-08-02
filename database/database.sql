-- Xóa CSDL nếu tồn tại và tạo lại
DROP DATABASE IF EXISTS Bakery;
CREATE DATABASE Bakery;
USE Bakery;

-- Bảng Customers
CREATE TABLE Customers (
    CustomerID VARCHAR(10) PRIMARY KEY,
    Email VARCHAR(255) NOT NULL,
    Username VARCHAR(255) NOT NULL,
    UserPassword VARCHAR(15) NOT NULL,
    UserFullName VARCHAR(255),
    PhoneNumber VARCHAR(20),
    Gender CHAR(3)
);

-- Bảng Address
CREATE TABLE Address (
    CustomerID VARCHAR(10) PRIMARY KEY,
    Address VARCHAR(250),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Bảng Orders
CREATE TABLE Orders (
    OrderID VARCHAR(10) PRIMARY KEY,
    CustomerID VARCHAR(6),
    OrderDate DATE,
    OrderPrice DECIMAL(10 , 2 ),
    ShippingDate DATE,
    ShippingPrice DECIMAL(10 , 2 ),
    ShippingAddress VARCHAR(250),
    OrderStatus VARCHAR(50),
    FOREIGN KEY (CustomerID)
        REFERENCES Customers (CustomerID)
);

-- Bảng TypeProducts
CREATE TABLE TypeProducts (
    TypeProductID VARCHAR(10) PRIMARY KEY,
    TypeProductName VARCHAR(255),
    Descriptions VARCHAR(250)
);

-- Bảng Products
CREATE TABLE Products (
    ProductID VARCHAR(10) PRIMARY KEY,
    ProductName VARCHAR(55) NOT NULL,
    Descriptions VARCHAR(255),
    Price INT,
    PrepareTime INT,
    CookingTime INT,
    ImageUrl VARCHAR(255),
    Nutrition VARCHAR(255),
    TypeProductID VARCHAR(10) NOT NULL,
    FOREIGN KEY (TypeProductID) REFERENCES TypeProducts(TypeProductID)
);

-- Bảng Feedback
CREATE TABLE Feedback (
    FeedBackID VARCHAR(10) PRIMARY KEY,
    CustomerID VARCHAR(6),
    Content VARCHAR(250),
    FeedBackDate DATE,
    FeedBackPoint INT,
    ProductID VARCHAR(10),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Bảng Cart
CREATE TABLE Cart (
    CartID VARCHAR(10) PRIMARY KEY,
    CustomerID VARCHAR(10),
    ProductID VARCHAR(10),
    CartItemQuantity INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Bảng OrderDetails
CREATE TABLE OrderDetails (
    OrderDetailID VARCHAR(10) PRIMARY KEY,
    OrderID VARCHAR(10),
    ProductID VARCHAR(10),
    Quantity INT,
    UnitPrice INT,
    OrderDetailsStatus VARCHAR(50),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
);

-- Bảng Ingredients
CREATE TABLE Ingredients (
    IngredientID VARCHAR(10) PRIMARY KEY,
    IngredientName VARCHAR(255) NOT NULL,
    StockQuantity INT,
    Unit VARCHAR(50)
);

-- Bảng Suppliers
CREATE TABLE Suppliers (
    SupplierID VARCHAR(10) PRIMARY KEY,
    SupplierName VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(20),
    Address VARCHAR(255)
);

-- Bảng IngredientBatch
CREATE TABLE IngredientBatch (
    IngredientBatchID VARCHAR(10) PRIMARY KEY,
    ImportDate DATE,
    ImportPrice INT,
    SupplierID VARCHAR(10),
    FOREIGN KEY (SupplierID) REFERENCES Suppliers(SupplierID)
);

-- Bảng Batch_Ingredient
CREATE TABLE Batch_Ingredient (
    IngredientBatchID VARCHAR(10),
    IngredientID VARCHAR(10),
    Quantity INT,
    ImportPrice INT,
    PRIMARY KEY (IngredientBatchID, IngredientID),
    FOREIGN KEY (IngredientBatchID) REFERENCES IngredientBatch(IngredientBatchID),
    FOREIGN KEY (IngredientID) REFERENCES Ingredients(IngredientID)
);

-- Bảng Griller
CREATE TABLE Griller (
    GrillerID VARCHAR(10) PRIMARY KEY,
    GrillerName VARCHAR(255),
    GrillerStatus VARCHAR(50),
    MaximumQuantity INT
);

-- Bảng Payment
CREATE TABLE Payment (
    PaymentID VARCHAR(10) PRIMARY KEY,
    OrderID VARCHAR(10),
    PaymentType VARCHAR(50),
    PaymentStatus VARCHAR(50),
    PaymentDate DATE,
    CustomerID VARCHAR(10),
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID)
);

-- Bảng Employees
CREATE TABLE Employees (
    EmployeeID VARCHAR(10) PRIMARY KEY,
    EmployeeName VARCHAR(255) NOT NULL,
    Position VARCHAR(50),
    Salary INT,
    Email VARCHAR(255),
    Gender CHAR(3)
);

-- Bảng ProductBatch
CREATE TABLE ProductBatch (
    ProductBatchID VARCHAR(10) PRIMARY KEY,
    ProductID VARCHAR(10),
    GrillerID VARCHAR(10),
    Status VARCHAR(50),
    Quantity INT,
    CookingTime DATE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (GrillerID) REFERENCES Griller(GrillerID)
);

-- Bảng Product_Ingredient
CREATE TABLE Product_Ingredient (
    ProductID VARCHAR(10),
    IngredientID VARCHAR(10),
    Quantity INT,
    PRIMARY KEY (ProductID, IngredientID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (IngredientID) REFERENCES Ingredients(IngredientID)
);
