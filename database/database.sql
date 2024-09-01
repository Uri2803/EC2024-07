DROP DATABASE IF EXISTS Bakery;
CREATE DATABASE Bakery CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE Bakery;


CREATE TABLE Account (
    Email VARCHAR(255) PRIMARY KEY,
    UserPassword VARCHAR(255) NOT NULL, 
    Username VARCHAR(255) NOT NULL,
    Role ENUM('Customer', 'Employee') NOT NULL
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng Customers
CREATE TABLE Customers (
    CustomerID VARCHAR(10) PRIMARY KEY,
    Email VARCHAR(255) NOT NULL,
    UserFullName VARCHAR(255),
    PhoneNumber VARCHAR(20),
    Gender CHAR(3),
    Address VARCHAR(250),
    FOREIGN KEY (Email) REFERENCES Account(Email)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng Orders
CREATE TABLE Orders (
    OrderID VARCHAR(10) PRIMARY KEY,
    CustomerID VARCHAR(6),
    OrderDate DATE,
    ShippingDate DATE,
    ShippingAddress VARCHAR(250),
    OrderPrice INT,
    ShippingPrice INT,
    OrderStatus BOOLEAN,
    FOREIGN KEY (CustomerID) REFERENCES Customers (CustomerID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng TypeProducts
CREATE TABLE TypeProducts (
    TypeProductID VARCHAR(10) PRIMARY KEY,
    TypeProductName VARCHAR(255),
    Descriptions VARCHAR(250)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng Feedback
CREATE TABLE Feedback (
    FeedBackID VARCHAR(10) PRIMARY KEY,
    CustomerID VARCHAR(10),
    Content VARCHAR(250),
    FeedBackDate DATE,
    FeedBackPoint INT,
    ProductID VARCHAR(10),
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng Cart
CREATE TABLE Cart (
    CartID VARCHAR(10) PRIMARY KEY,
    CustomerID VARCHAR(10),
    ProductID VARCHAR(10),
    CartItemQuantity INT,
    FOREIGN KEY (CustomerID) REFERENCES Customers(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng OrderDetails
CREATE TABLE OrderDetails (
    OrderDetailID VARCHAR(10) PRIMARY KEY,
    OrderID VARCHAR(10),
    ProductID VARCHAR(10),
    Quantity INT,
    UnitPrice INT,
    FOREIGN KEY (OrderID) REFERENCES Orders(OrderID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng Inventory
CREATE TABLE Inventory (
    IngredientID VARCHAR(10) PRIMARY KEY,
    IngredientName VARCHAR(255) NOT NULL,
    StockQuantity INT,
    Unit VARCHAR(50)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng Suppliers
CREATE TABLE Supplier (
    SupplierID VARCHAR(10) PRIMARY KEY,
    SupplierName VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(20),
    Address VARCHAR(255)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng ImportOrder
CREATE TABLE ImportOrder (
    ImportOrderID VARCHAR(10) PRIMARY KEY,
    ImportOrderDate DATE,
    TotalPrice INT,
    SupplierID VARCHAR(10),
    FOREIGN KEY (SupplierID) REFERENCES Supplier(SupplierID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng ImportOrderDetail
CREATE TABLE ImportOrderDetail (
    ImportOrderID VARCHAR(10),
    IngredientID VARCHAR(10),
    Quantity INT,
    ImportPrice INT,
    PRIMARY KEY (ImportOrderID, IngredientID),
    FOREIGN KEY (ImportOrderID) REFERENCES ImportOrder(ImportOrderID),
    FOREIGN KEY (IngredientID) REFERENCES Inventory(IngredientID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng Recipe
CREATE TABLE Recipe (
    ProductID VARCHAR(10),
    IngredientID VARCHAR(10),
    Quantity INT,
    PRIMARY KEY (ProductID, IngredientID),
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (IngredientID) REFERENCES Inventory(IngredientID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

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
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng Employees
CREATE TABLE Employees (
    EmployeeID VARCHAR(10) PRIMARY KEY,
    Email VARCHAR(255),
    EmployeeName VARCHAR(255) NOT NULL,
    Position VARCHAR(50),
    Salary INT,
    Gender CHAR(3),
    FOREIGN KEY (Email) REFERENCES Account(Email)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng Griller
CREATE TABLE Griller (
    GrillerID VARCHAR(10) PRIMARY KEY,
    GrillerName VARCHAR(255),
    GrillerStatus VARCHAR(50),
    MaximumQuantity INT
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Bảng ProductBatch
CREATE TABLE ProductBatch (
    ProductBatchID VARCHAR(10) PRIMARY KEY,
    ProductID VARCHAR(10),
    GrillerID VARCHAR(10),
    Quantity INT,
    CookingTime DATE,
    FOREIGN KEY (ProductID) REFERENCES Products(ProductID),
    FOREIGN KEY (GrillerID) REFERENCES Griller(GrillerID)
) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
