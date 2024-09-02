-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 02, 2024 at 12:14 PM
-- Server version: 10.6.19-MariaDB
-- PHP Version: 8.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `hmquangi_Bakery`
--

DELIMITER $$
--
-- Procedures
--
$$

$$

$$

--
-- Functions
--
$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `Account`
--

CREATE TABLE `Account` (
  `Email` varchar(255) NOT NULL,
  `UserPassword` varchar(255) NOT NULL,
  `Username` varchar(255) NOT NULL,
  `Role` enum('Customer','Employee') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Account`
--

INSERT INTO `Account` (`Email`, `UserPassword`, `Username`, `Role`) VALUES
('abc@gmail.com', '3663613133643532636137306338383365306630626231303165343235613839', 'abc', 'Customer'),
('dinh.thi.j@example.com', '6161346139656130336663616331356235666336336339343961633334653762', 'dinhthij', 'Customer'),
('hoang.van.e@example.com', '3862326338366561396366326561346562353137666431653036623734663339', 'hoangvane', 'Customer'),
('ktest', '6136363561343539323034323266396434313765343836376566646334666238', 'ktest', 'Customer'),
('le.van.c@example.com', '3539303661633336316131333765326432383634363563643635383865626235', 'levanc', 'Customer'),
('ngo.van.i@example.com', '3933323364643637383665626362663361633837333537636337386261316162', 'ngovani', 'Customer'),
('nguyen.thi.f@example.com', '3539386131613430306331646664663336393734653639643765316263393835', 'nguyenthif', 'Customer'),
('nguyen.van.a@example.com', '3062313464353031613539343434326130316336383539353431626362336538', 'nguyenvana', 'Customer'),
('nguyen.van.abc@example.com', '3533643435336230633038623662333861653931353135646338386432356662', 'nguyenvanabc', 'Employee'),
('pham.thi.d@example.com', '6239373837336134306637336162656464386436383561376364356535663835', 'phamthid', 'Customer'),
('phan.van.g@example.com', '3538363038333665386631336663393833373533396135393764343038366266', 'phanvang', 'Customer'),
('tran.thi.b@example.com', '3663663631356435626361616337373833353261386631663333363064323366', 'tranthib', 'Customer'),
('vu.thi.h@example.com', '3537663365626162363366313536666438663737366261363435613535643936', 'vuthih', 'Customer');

-- --------------------------------------------------------

--
-- Table structure for table `Cart`
--

CREATE TABLE `Cart` (
  `CartID` varchar(10) NOT NULL,
  `CustomerID` varchar(10) DEFAULT NULL,
  `ProductID` varchar(10) DEFAULT NULL,
  `CartItemQuantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Triggers `Cart`
--
DELIMITER $$
CREATE TRIGGER `before_insert_cart` BEFORE INSERT ON `Cart` FOR EACH ROW BEGIN
    DECLARE nextID INT;
    DECLARE newCartID VARCHAR(10);

    SELECT IFNULL(MAX(CAST(SUBSTRING(CartID, 3) AS UNSIGNED)), 0) + 1 INTO nextID
    FROM Cart;


SET newCartID = CONCAT('GH', LPAD(nextID, 4, '0'));
    SET NEW.CartID = newCartID;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `Coupon`
--

CREATE TABLE `Coupon` (
  `CouponID` varchar(10) NOT NULL,
  `ExpiryDate` date DEFAULT NULL,
  `CouponDescription` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Customers`
--

CREATE TABLE `Customers` (
  `CustomerID` varchar(10) NOT NULL,
  `Email` varchar(255) NOT NULL,
  `UserFullName` varchar(255) DEFAULT NULL,
  `PhoneNumber` varchar(20) DEFAULT NULL,
  `Gender` char(3) DEFAULT NULL,
  `Address` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Customers`
--

INSERT INTO `Customers` (`CustomerID`, `Email`, `UserFullName`, `PhoneNumber`, `Gender`, `Address`) VALUES
('KH0001', 'nguyen.van.a@example.com', 'Nguyễn Văn A', '0123456789', 'Nam', '123 Lý Thường Kiệt, Quận 1, TP. Hồ Chí Minh'),
('KH0002', 'tran.thi.b@example.com', 'Trần Thị B', '0987654321', 'Nữ', '456 Trần Hưng Đạo, Quận 5, TP. Hồ Chí Minh'),
('KH0003', 'le.van.c@example.com', 'Lê Văn C', '0912345678', 'Nam', '789 Nguyễn Trãi, Quận 3, TP. Hồ Chí Minh'),
('KH0004', 'pham.thi.d@example.com', 'Phạm Thị D', '0934567890', 'Nữ', '101 Phan Xích Long, Quận Phú Nhuận, TP. Hồ Chí Minh'),
('KH0005', 'hoang.van.e@example.com', 'Hoàng Văn E', '0945678901', 'Nam', '202 Hai Bà Trưng, Quận 1, TP. Hồ Chí Minh'),
('KH0006', 'nguyen.thi.f@example.com', 'Nguyễn Thị F', '0956789012', 'Nữ', '303 Điện Biên Phủ, Quận Bình Thạnh, TP. Hồ Chí Minh'),
('KH0007', 'phan.van.g@example.com', 'Phan Văn G', '0967890123', 'Nam', '404 Phạm Văn Đồng, Quận Thủ Đức, TP. Hồ Chí Minh'),
('KH0008', 'vu.thi.h@example.com', 'Vũ Thị H', '0978901234', 'Nữ', '505 Lê Lợi, Quận 1, TP. Hồ Chí Minh'),
('KH0009', 'ngo.van.i@example.com', 'Ngô Văn I', '0989012345', 'Nam', '606 Cách Mạng Tháng 8, Quận 10, TP. Hồ Chí Minh'),
('KH0010', 'dinh.thi.j@example.com', 'Đinh Thị J', '0990123456', 'Nữ', '707 Võ Văn Kiệt, Quận 6, TP. Hồ Chí Minh'),
('KH0011', 'abc@gmail.com', NULL, NULL, NULL, NULL),
('KH0012', 'ktest', NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Employees`
--

CREATE TABLE `Employees` (
  `EmployeeID` varchar(10) NOT NULL,
  `Email` varchar(255) DEFAULT NULL,
  `EmployeeName` varchar(255) NOT NULL,
  `Position` varchar(50) DEFAULT NULL,
  `Salary` int(11) DEFAULT NULL,
  `Gender` char(3) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Employees`
--

INSERT INTO `Employees` (`EmployeeID`, `Email`, `EmployeeName`, `Position`, `Salary`, `Gender`) VALUES
('EM0001', 'nguyen.van.abc@example.com', 'Nguyễn Văn A', 'Chef', 15000000, 'Nam');

-- --------------------------------------------------------

--
-- Table structure for table `Feedback`
--

CREATE TABLE `Feedback` (
  `FeedBackID` varchar(10) NOT NULL,
  `CustomerID` varchar(10) DEFAULT NULL,
  `Content` varchar(250) DEFAULT NULL,
  `FeedBackDate` date DEFAULT NULL,
  `FeedBackPoint` int(11) DEFAULT NULL,
  `ProductID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Feedback`
--

INSERT INTO `Feedback` (`FeedBackID`, `CustomerID`, `Content`, `FeedBackDate`, `FeedBackPoint`, `ProductID`) VALUES
('FB0001', 'KH0001', 'Great taste!', '2024-08-02', 5, 'MU0001');

-- --------------------------------------------------------

--
-- Table structure for table `Griller`
--

CREATE TABLE `Griller` (
  `GrillerID` varchar(10) NOT NULL,
  `GrillerName` varchar(255) DEFAULT NULL,
  `GrillerStatus` varchar(50) DEFAULT NULL,
  `MaximumQuantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Griller`
--

INSERT INTO `Griller` (`GrillerID`, `GrillerName`, `GrillerStatus`, `MaximumQuantity`) VALUES
('GR0001', 'Grill Master 3000', 'Active', 10);

-- --------------------------------------------------------

--
-- Table structure for table `ImportOrder`
--

CREATE TABLE `ImportOrder` (
  `ImportOrderID` varchar(10) NOT NULL,
  `ImportOrderDate` date DEFAULT NULL,
  `TotalPrice` int(11) DEFAULT NULL,
  `SupplierID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ImportOrder`
--

INSERT INTO `ImportOrder` (`ImportOrderID`, `ImportOrderDate`, `TotalPrice`, `SupplierID`) VALUES
('IO0001', '2023-08-01', 50000, 'SU0001');

-- --------------------------------------------------------

--
-- Table structure for table `ImportOrderDetail`
--

CREATE TABLE `ImportOrderDetail` (
  `ImportOrderID` varchar(10) NOT NULL,
  `IngredientID` varchar(10) NOT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `ImportPrice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ImportOrderDetail`
--

INSERT INTO `ImportOrderDetail` (`ImportOrderID`, `IngredientID`, `Quantity`, `ImportPrice`) VALUES
('IO0001', 'IN0001', 50, 1000);

-- --------------------------------------------------------

--
-- Table structure for table `Inventory`
--

CREATE TABLE `Inventory` (
  `IngredientID` varchar(10) NOT NULL,
  `IngredientName` varchar(255) NOT NULL,
  `StockQuantity` int(11) DEFAULT NULL,
  `Unit` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Inventory`
--

INSERT INTO `Inventory` (`IngredientID`, `IngredientName`, `StockQuantity`, `Unit`) VALUES
('IN0001', 'Bột mì đa dụng', 10000, 'g'),
('IN0002', 'Baking soda', 100, 'tsp'),
('IN0003', 'Muối', 100, 'tsp'),
('IN0004', 'Bột nở', 100, 'tsp'),
('IN0005', 'Đường', 10000, 'g'),
('IN0006', 'Trứng gà', 100, 'quả'),
('IN0007', 'Tinh chất vanilla', 100, 'tsp'),
('IN0008', 'Sữa', 10000, 'ml'),
('IN0009', 'Dầu thực vật', 10000, 'ml'),
('IN0010', 'Kem chua', 10000, 'g'),
('IN0011', 'Bột ca cao', 10000, 'g'),
('IN0012', 'Hạt chocolate', 10000, 'g'),
('IN0013', 'Quế xay', 100, 'tsp'),
('IN0014', 'Bơ lạt', 10000, 'g'),
('IN0015', 'Đường nâu', 10000, 'g'),
('IN0016', 'Chuối', 100, 'quả'),
('IN0017', 'Việt quất', 1000, 'g'),
('IN0018', 'Mâm xôi', 1000, 'g'),
('IN0019', 'Dâu', 1000, 'g'),
('IN0020', 'Gừng xay', 100, 'tsp'),
('IN0021', 'Hạt nhục đậu khấu', 100, 'tsp'),
('IN0022', 'Cà rốt', 1000, 'g'),
('IN0023', 'Óc chó', 1000, 'g'),
('IN0024', 'Nho khô', 1000, 'g'),
('IN0025', 'Hạt anh túc', 1000, 'g'),
('IN0026', 'Vỏ chanh', 100, 'g'),
('IN0027', 'Sữa chua hy lạp', 1000, 'g'),
('IN0028', 'Nước cốt chanh', 100, 'g'),
('IN0029', 'Đường bột', 1000, 'g'),
('IN0030', 'Bột bắp', 100, 'g'),
('IN0031', 'Chocolate đen', 500, 'g'),
('IN0032', 'Bột matcha', 100, 'g'),
('IN0033', 'Kẹo trang trí', 100, 'g'),
('IN0034', 'Thạch trái cây', 100, 'gói'),
('IN0035', 'Sữa đặc', 100, 'g'),
('IN0036', 'Hạnh nhân lát', 100, 'g'),
('IN0037', 'Lòng đỏ trứng muối', 100, 'quả');

-- --------------------------------------------------------

--
-- Table structure for table `OrderDetails`
--

CREATE TABLE `OrderDetails` (
  `OrderDetailID` varchar(10) NOT NULL,
  `OrderID` varchar(10) DEFAULT NULL,
  `ProductID` varchar(10) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `UnitPrice` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `OrderDetails`
--

INSERT INTO `OrderDetails` (`OrderDetailID`, `OrderID`, `ProductID`, `Quantity`, `UnitPrice`) VALUES
('CT0001', 'DH0001', 'CR0002', 4, 25000),
('CT0002', 'DH0002', 'CR0002', 3, 75000),
('CT0003', 'DH0003', 'CR0004', 3, 75000),
('CT0004', 'DH0003', 'DO0002', 5, 75000);

--
-- Triggers `OrderDetails`
--
DELIMITER $$
CREATE TRIGGER `before_insert_orderdetail` BEFORE INSERT ON `OrderDetails` FOR EACH ROW BEGIN
    DECLARE nextID INT;
    DECLARE newOrderDetailID VARCHAR(10);

    SELECT IFNULL(MAX(CAST(SUBSTRING(OrderDetailID, 3) AS UNSIGNED)), 0) + 1 INTO nextID
    FROM OrderDetails;


SET newOrderDetailID = CONCAT('CT', LPAD(nextID, 4, '0'));
    SET NEW.OrderDetailID = newOrderDetailID;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `Orders`
--

CREATE TABLE `Orders` (
  `OrderID` varchar(10) NOT NULL,
  `CustomerID` varchar(6) DEFAULT NULL,
  `OrderDate` date DEFAULT NULL,
  `ShippingDate` date DEFAULT NULL,
  `ShippingAddress` varchar(250) DEFAULT NULL,
  `OrderPrice` int(11) DEFAULT NULL,
  `ShippingPrice` int(11) DEFAULT NULL,
  `OrderStatus` varchar(50) DEFAULT NULL,
  `CouponID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Orders`
--

INSERT INTO `Orders` (`OrderID`, `CustomerID`, `OrderDate`, `ShippingDate`, `ShippingAddress`, `OrderPrice`, `ShippingPrice`, `OrderStatus`, `CouponID`) VALUES
('DH0001', 'KH0001', '2024-08-01', '2024-08-03', '123 Lý Thường Kiệt, Quận 1, TP. Hồ Chí Minh', 100000, 20000, '1', NULL),
('DH0002', 'KH0001', '2024-09-02', '2024-09-03', '135B Trần Hưng Đạo, Phường Cầu Ông Lãnh, Quận 1, Thành phố Hồ Chí Minh', 75000, 15000, 'Đã thanh toán', NULL),
('DH0003', 'KH0001', '2024-09-02', '2024-10-09', '1111, Phường 01, Quận 5, Thành phố Hồ Chí Minh', 150000, 15000, 'Đã thanh toán', NULL);

--
-- Triggers `Orders`
--
DELIMITER $$
CREATE TRIGGER `before_insert_order` BEFORE INSERT ON `Orders` FOR EACH ROW BEGIN
    DECLARE nextID INT;
    DECLARE newOrderID VARCHAR(10);
    SELECT IFNULL(MAX(CAST(SUBSTRING(OrderID, 3) AS UNSIGNED)), 0) + 1 INTO nextID
    FROM Orders;
    SET newOrderID = CONCAT('DH', LPAD(nextID, 4, '0'));
    SET NEW.OrderID = newOrderID;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `Payment`
--

CREATE TABLE `Payment` (
  `PaymentID` varchar(10) NOT NULL,
  `OrderID` varchar(10) DEFAULT NULL,
  `PaymentType` varchar(50) DEFAULT NULL,
  `PaymentStatus` varchar(50) DEFAULT NULL,
  `PaymentDate` date DEFAULT NULL,
  `CustomerID` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Payment`
--

INSERT INTO `Payment` (`PaymentID`, `OrderID`, `PaymentType`, `PaymentStatus`, `PaymentDate`, `CustomerID`) VALUES
('PA0001', 'DH0001', 'Credit Card', 'Completed', '2023-08-02', 'KH0001');

-- --------------------------------------------------------

--
-- Table structure for table `ProductBatch`
--

CREATE TABLE `ProductBatch` (
  `ProductBatchID` varchar(10) NOT NULL,
  `ProductID` varchar(10) DEFAULT NULL,
  `GrillerID` varchar(10) DEFAULT NULL,
  `Quantity` int(11) DEFAULT NULL,
  `CookingTime` int(11) DEFAULT NULL,
  `BatchStatus` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `ProductBatch`
--

INSERT INTO `ProductBatch` (`ProductBatchID`, `ProductID`, `GrillerID`, `Quantity`, `CookingTime`, `BatchStatus`) VALUES
('PB0001', 'MU0001', 'GR0001', 5, 2023, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

CREATE TABLE `Products` (
  `ProductID` varchar(10) NOT NULL,
  `ProductName` varchar(55) NOT NULL,
  `Descriptions` varchar(255) DEFAULT NULL,
  `Price` int(11) DEFAULT NULL,
  `PrepareTime` int(11) DEFAULT NULL,
  `CookingTime` int(11) DEFAULT NULL,
  `ImageUrl` varchar(255) DEFAULT NULL,
  `Nutrition` varchar(255) DEFAULT NULL,
  `TypeProductID` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`ProductID`, `ProductName`, `Descriptions`, `Price`, `PrepareTime`, `CookingTime`, `ImageUrl`, `Nutrition`, `TypeProductID`) VALUES
('CR0001', 'Croissant Truyền thống', 'Bánh sừng bò với lớp vỏ ngoài giòn và nhiều lớp bên trong mềm mịn, tạo hình cong đặc trưng.', 20000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/Croissant/Classic', NULL, 'LB0004'),
('CR0002', 'Croissant Chocolate', 'Bánh sừng bò truyền thống với nhân sô cô la thơm ngon bên trong.', 25000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/Croissant/Chocolate', NULL, 'LB0004'),
('CR0003', 'Croissant Hạnh nhân', 'Bánh sừng bò được phủ lớp kem hạnh nhân và hạnh nhân lát giòn rụm.', 30000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/Croissant/Almond', NULL, 'LB0004'),
('CR0004', 'Croissant Trứng muối', 'Bánh sừng bò với nhân trứng muối mặn mà, kết hợp vị giòn của vỏ bánh và vị đậm đà của trứng muối.', 25000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/Croissant/SaltedEgg', NULL, 'LB0004'),
('DO0001', 'Donut Truyền thống', 'Hương vị chua nhẹ và ngọt thanh của quả mâm xôi tươi.', 12000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/donuts/classic', NULL, 'LB0001'),
('DO0002', 'Donut Glazed', 'Bánh donut truyền thống được phủ một lớp đường glaze bóng loáng.', 15000, 120, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/donuts/Glazed', NULL, 'LB0002'),
('DO0003', 'Donut Nhân kem', 'Bánh donut có nhân kem bên trong, thường là kem vani hoặc kem sô cô la.', 18000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/donuts/cream', NULL, 'LB0002'),
('DO0004', 'Donut Chocolate', 'Bánh donut được phủ một lớp socola tan chảy.', 18000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/donuts/chocolate', NULL, 'LB0002'),
('DO0005', 'Donut Matcha', 'Bánh donut được phủ một lớp matcha.', 20000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/donuts/matcha', NULL, 'LB0002'),
('DO0006', 'Donut Nhân thạch', 'Bánh donut mềm xốp bên ngoài, nhân bên trong là thạch trái cây ngọt ngào, đa dạng hương vị.', 18000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/donuts/jelly', NULL, 'LB0002'),
('MU0001', 'Muffin Chocolate', 'Với lớp bột mềm mịn và những hạt chocolate tan chảy, mỗi miếng bánh sẽ mang đến cho bạn cảm giác đậm đà và thỏa mãn không thể chối từ.', 12000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/muffin/chocolate', NULL, 'LB0001'),
('MU0002', 'Muffin Chuối', 'Hương vị tự nhiên của chuối chín và kết cấu mềm mịn của bánh.', 12000, 15, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/muffin/banana', NULL, 'LB0001'),
('MU0003', 'Muffin Việt quất', 'Hương vị ngọt ngào tự nhiên từ việt quất tạo nên một món ăn vừa ngon miệng vừa bổ dưỡng.', 12000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/muffin/blueberry', NULL, 'LB0001'),
('MU0004', 'Muffin Mâm xôi', 'Hương vị chua nhẹ và ngọt thanh của quả mâm xôi tươi.', 12000, 15, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/muffin/rasberry', NULL, 'LB0001'),
('MU0005', 'Muffin Dâu', 'Hương vị tươi mát và ngọt ngào từ những trái dâu tây chín mọng.', 12000, 20, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/muffin/strawberry', NULL, 'LB0001'),
('MU0006', 'Muffin Cà rốt', 'Hương vị từ những củ cà rốt tươi ngon, kết hợp với gia vị nhẹ nhàng tạo nên một món bánh vừa ngọt ngào vừa bổ dưỡng.', 12000, 10, 20, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/muffin/carot', NULL, 'LB0001'),
('MU0007', 'Muffin Chanh', 'Hương vị tươi mát từ chanh tự nhiên, kết hợp với độ mềm xốp của bánh tạo nên một món ăn nhẹ lý tưởng, sảng khoái.', 12000, 10, 12, 'https://github.com/Uri2803/EC2024-07/raw/main/client/public/muffin/lemon', NULL, 'LB0001');

-- --------------------------------------------------------

--
-- Table structure for table `Recipe`
--

CREATE TABLE `Recipe` (
  `ProductID` varchar(10) NOT NULL,
  `IngredientID` varchar(10) NOT NULL,
  `Quantity` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Recipe`
--

INSERT INTO `Recipe` (`ProductID`, `IngredientID`, `Quantity`) VALUES
('MU0001', 'IN0001', 10);

-- --------------------------------------------------------

--
-- Table structure for table `Supplier`
--

CREATE TABLE `Supplier` (
  `SupplierID` varchar(10) NOT NULL,
  `SupplierName` varchar(255) NOT NULL,
  `PhoneNumber` varchar(20) DEFAULT NULL,
  `Address` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `Supplier`
--

INSERT INTO `Supplier` (`SupplierID`, `SupplierName`, `PhoneNumber`, `Address`) VALUES
('SU0001', 'Fresh Farms', '0123456789', '123 Farm Lane, HCMC');

-- --------------------------------------------------------

--
-- Table structure for table `TypeProducts`
--

CREATE TABLE `TypeProducts` (
  `TypeProductID` varchar(10) NOT NULL,
  `TypeProductName` varchar(255) DEFAULT NULL,
  `Descriptions` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `TypeProducts`
--

INSERT INTO `TypeProducts` (`TypeProductID`, `TypeProductName`, `Descriptions`) VALUES
('LB0001', 'Muffin', NULL),
('LB0002', 'Donut', NULL),
('LB0003', 'Baguette', NULL),
('LB0004', 'Croissant', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Account`
--
ALTER TABLE `Account`
  ADD PRIMARY KEY (`Email`);

--
-- Indexes for table `Cart`
--
ALTER TABLE `Cart`
  ADD PRIMARY KEY (`CartID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `Coupon`
--
ALTER TABLE `Coupon`
  ADD PRIMARY KEY (`CouponID`);

--
-- Indexes for table `Customers`
--
ALTER TABLE `Customers`
  ADD PRIMARY KEY (`CustomerID`),
  ADD KEY `Email` (`Email`);

--
-- Indexes for table `Employees`
--
ALTER TABLE `Employees`
  ADD PRIMARY KEY (`EmployeeID`),
  ADD KEY `Email` (`Email`);

--
-- Indexes for table `Feedback`
--
ALTER TABLE `Feedback`
  ADD PRIMARY KEY (`FeedBackID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `Griller`
--
ALTER TABLE `Griller`
  ADD PRIMARY KEY (`GrillerID`);

--
-- Indexes for table `ImportOrder`
--
ALTER TABLE `ImportOrder`
  ADD PRIMARY KEY (`ImportOrderID`),
  ADD KEY `SupplierID` (`SupplierID`);

--
-- Indexes for table `ImportOrderDetail`
--
ALTER TABLE `ImportOrderDetail`
  ADD PRIMARY KEY (`ImportOrderID`,`IngredientID`),
  ADD KEY `IngredientID` (`IngredientID`);

--
-- Indexes for table `Inventory`
--
ALTER TABLE `Inventory`
  ADD PRIMARY KEY (`IngredientID`);

--
-- Indexes for table `OrderDetails`
--
ALTER TABLE `OrderDetails`
  ADD PRIMARY KEY (`OrderDetailID`),
  ADD KEY `OrderID` (`OrderID`),
  ADD KEY `ProductID` (`ProductID`);

--
-- Indexes for table `Orders`
--
ALTER TABLE `Orders`
  ADD PRIMARY KEY (`OrderID`),
  ADD KEY `CustomerID` (`CustomerID`),
  ADD KEY `fk_coupon` (`CouponID`);

--
-- Indexes for table `Payment`
--
ALTER TABLE `Payment`
  ADD PRIMARY KEY (`PaymentID`),
  ADD KEY `OrderID` (`OrderID`),
  ADD KEY `CustomerID` (`CustomerID`);

--
-- Indexes for table `ProductBatch`
--
ALTER TABLE `ProductBatch`
  ADD PRIMARY KEY (`ProductBatchID`),
  ADD KEY `ProductID` (`ProductID`),
  ADD KEY `GrillerID` (`GrillerID`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`ProductID`),
  ADD KEY `TypeProductID` (`TypeProductID`);

--
-- Indexes for table `Recipe`
--
ALTER TABLE `Recipe`
  ADD PRIMARY KEY (`ProductID`,`IngredientID`),
  ADD KEY `IngredientID` (`IngredientID`);

--
-- Indexes for table `Supplier`
--
ALTER TABLE `Supplier`
  ADD PRIMARY KEY (`SupplierID`);

--
-- Indexes for table `TypeProducts`
--
ALTER TABLE `TypeProducts`
  ADD PRIMARY KEY (`TypeProductID`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Cart`
--
ALTER TABLE `Cart`
  ADD CONSTRAINT `Cart_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `Customers` (`CustomerID`),
  ADD CONSTRAINT `Cart_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`);

--
-- Constraints for table `Customers`
--
ALTER TABLE `Customers`
  ADD CONSTRAINT `Customers_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `Account` (`Email`);

--
-- Constraints for table `Employees`
--
ALTER TABLE `Employees`
  ADD CONSTRAINT `Employees_ibfk_1` FOREIGN KEY (`Email`) REFERENCES `Account` (`Email`);

--
-- Constraints for table `Feedback`
--
ALTER TABLE `Feedback`
  ADD CONSTRAINT `Feedback_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `Customers` (`CustomerID`),
  ADD CONSTRAINT `Feedback_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`);

--
-- Constraints for table `ImportOrder`
--
ALTER TABLE `ImportOrder`
  ADD CONSTRAINT `ImportOrder_ibfk_1` FOREIGN KEY (`SupplierID`) REFERENCES `Supplier` (`SupplierID`);

--
-- Constraints for table `ImportOrderDetail`
--
ALTER TABLE `ImportOrderDetail`
  ADD CONSTRAINT `ImportOrderDetail_ibfk_1` FOREIGN KEY (`ImportOrderID`) REFERENCES `ImportOrder` (`ImportOrderID`),
  ADD CONSTRAINT `ImportOrderDetail_ibfk_2` FOREIGN KEY (`IngredientID`) REFERENCES `Inventory` (`IngredientID`);

--
-- Constraints for table `OrderDetails`
--
ALTER TABLE `OrderDetails`
  ADD CONSTRAINT `OrderDetails_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `Orders` (`OrderID`),
  ADD CONSTRAINT `OrderDetails_ibfk_2` FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`);

--
-- Constraints for table `Orders`
--
ALTER TABLE `Orders`
  ADD CONSTRAINT `Orders_ibfk_1` FOREIGN KEY (`CustomerID`) REFERENCES `Customers` (`CustomerID`),
  ADD CONSTRAINT `fk_coupon` FOREIGN KEY (`CouponID`) REFERENCES `Coupon` (`CouponID`);

--
-- Constraints for table `Payment`
--
ALTER TABLE `Payment`
  ADD CONSTRAINT `Payment_ibfk_1` FOREIGN KEY (`OrderID`) REFERENCES `Orders` (`OrderID`),
  ADD CONSTRAINT `Payment_ibfk_2` FOREIGN KEY (`CustomerID`) REFERENCES `Customers` (`CustomerID`);

--
-- Constraints for table `ProductBatch`
--
ALTER TABLE `ProductBatch`
  ADD CONSTRAINT `ProductBatch_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`),
  ADD CONSTRAINT `ProductBatch_ibfk_2` FOREIGN KEY (`GrillerID`) REFERENCES `Griller` (`GrillerID`);

--
-- Constraints for table `Products`
--
ALTER TABLE `Products`
  ADD CONSTRAINT `Products_ibfk_1` FOREIGN KEY (`TypeProductID`) REFERENCES `TypeProducts` (`TypeProductID`);

--
-- Constraints for table `Recipe`
--
ALTER TABLE `Recipe`
  ADD CONSTRAINT `Recipe_ibfk_1` FOREIGN KEY (`ProductID`) REFERENCES `Products` (`ProductID`),
  ADD CONSTRAINT `Recipe_ibfk_2` FOREIGN KEY (`IngredientID`) REFERENCES `Inventory` (`IngredientID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
