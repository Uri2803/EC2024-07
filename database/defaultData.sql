INSERT INTO Account (Email, UserPassword, Username, Role) VALUES
('nguyen.van.a@example.com', 'password1', 'nguyenvana', 'Customer'),
('tran.thi.b@example.com', 'password2', 'tranthib', 'Customer'),
('le.van.c@example.com', 'password3', 'levanc', 'Customer'),
('pham.thi.d@example.com', 'password4', 'phamthid', 'Customer'),
('hoang.van.e@example.com', 'password5', 'hoangvane', 'Customer'),
('nguyen.thi.f@example.com', 'password6', 'nguyenthif', 'Customer'),
('phan.van.g@example.com', 'password7', 'phanvang', 'Customer'),
('vu.thi.h@example.com', 'password8', 'vuthih', 'Customer'),
('ngo.van.i@example.com', 'password9', 'ngovani', 'Customer'),
('dinh.thi.j@example.com', 'password10', 'dinhthij', 'Customer'),
('nguyen.van.abc@example.com', 'password11', 'nguyenvanabc', 'Employee'),
('1@example.com', '1', 'nguyenvanabc', 'Employee');


-- Thêm dữ liệu vào bảng Customers
INSERT INTO Customers (CustomerID, Email, UserFullName, PhoneNumber, Gender, Address) VALUES
('KH0001', 'nguyen.van.a@example.com', 'Nguyễn Văn A', '0123456789', 'Nam', '123 Lý Thường Kiệt, Quận 1, TP. Hồ Chí Minh'),
('KH0002', 'tran.thi.b@example.com', 'Trần Thị B', '0987654321', 'Nữ', '456 Trần Hưng Đạo, Quận 5, TP. Hồ Chí Minh'),
('KH0003', 'le.van.c@example.com', 'Lê Văn C', '0912345678', 'Nam', '789 Nguyễn Trãi, Quận 3, TP. Hồ Chí Minh'),
('KH0004', 'pham.thi.d@example.com', 'Phạm Thị D', '0934567890', 'Nữ', '101 Phan Xích Long, Quận Phú Nhuận, TP. Hồ Chí Minh'),
('KH0005', 'hoang.van.e@example.com', 'Hoàng Văn E', '0945678901', 'Nam', '202 Hai Bà Trưng, Quận 1, TP. Hồ Chí Minh'),
('KH0006', 'nguyen.thi.f@example.com', 'Nguyễn Thị F', '0956789012', 'Nữ', '303 Điện Biên Phủ, Quận Bình Thạnh, TP. Hồ Chí Minh'),
('KH0007', 'phan.van.g@example.com', 'Phan Văn G', '0967890123', 'Nam', '404 Phạm Văn Đồng, Quận Thủ Đức, TP. Hồ Chí Minh'),
('KH0008', 'vu.thi.h@example.com', 'Vũ Thị H', '0978901234', 'Nữ', '505 Lê Lợi, Quận 1, TP. Hồ Chí Minh'),
('KH0009', 'ngo.van.i@example.com', 'Ngô Văn I', '0989012345', 'Nam', '606 Cách Mạng Tháng 8, Quận 10, TP. Hồ Chí Minh'),
('KH0010', 'dinh.thi.j@example.com', 'Đinh Thị J', '0990123456', 'Nữ', '707 Võ Văn Kiệt, Quận 6, TP. Hồ Chí Minh');

INSERT INTO TypeProducts (TypeProductID, TypeProductName) VALUES
('LB0001','Muffin'),
('LB0002','Donut'),
('LB0003','Bread'),
('LB0004','Croissant');

INSERT INTO Orders (OrderID, CustomerID, OrderDate, OrderPrice, ShippingDate, ShippingPrice, ShippingAddress, OrderStatus)
VALUES ('DH0001', 'KH0001', '2024-08-01', 100000, '2024-08-03', 20000, '123 Lý Thường Kiệt, Quận 1, TP. Hồ Chí Minh', 'Processing');

INSERT INTO Products (ProductID, ProductName, Descriptions, Price, PrepareTime, CookingTime, TypeProductID) VALUES 
('MU0001', 'Muffin Chocolate', 'Với lớp bột mềm mịn và những hạt chocolate tan chảy, mỗi miếng bánh sẽ mang đến cho bạn cảm giác đậm đà và thỏa mãn không thể chối từ.', 12000, 10, 20, 'LB0001'),
('MU0002', 'Muffin Chuối', 'Hương vị tự nhiên của chuối chín và kết cấu mềm mịn của bánh.', 12000, 15, 20, 'LB0001'),
('MU0003', 'Muffin Việt quất', 'Hương vị ngọt ngào tự nhiên từ việt quất tạo nên một món ăn vừa ngon miệng vừa bổ dưỡng.', 12000, 10, 20, 'LB0001'),
('MU0004', 'Muffin Mâm xôi', 'Hương vị chua nhẹ và ngọt thanh của quả mâm xôi tươi.', 12000, 15, 20, 'LB0001'),
('MU0005', 'Muffin Dâu', 'Hương vị tươi mát và ngọt ngào từ những trái dâu tây chín mọng.', 12000, 20, 20, 'LB0001'),
('MU0006', 'Muffin Cà rốt', 'Hương vị từ những củ cà rốt tươi ngon, kết hợp với gia vị nhẹ nhàng tạo nên một món bánh vừa ngọt ngào vừa bổ dưỡng.', 12000, 10, 20, 'LB0001'),
('MU0007', 'Muffin Chanh', 'Hương vị tươi mát từ chanh tự nhiên, kết hợp với độ mềm xốp của bánh tạo nên một món ăn nhẹ lý tưởng, sảng khoái.', 12000, 10, 12, 'LB0001'),
('DO0001', 'Donut Truyền thống', 'Hương vị chua nhẹ và ngọt thanh của quả mâm xôi tươi.', 12000, 10, 20, 'LB0001'),
('DO0002', 'Donut Glazed', 'Bánh donut truyền thống được phủ một lớp đường glaze bóng loáng.', 15000, 120, 20, 'LB0002'),
('DO0003', 'Donut Nhân kem', 'Bánh donut có nhân kem bên trong, thường là kem vani hoặc kem sô cô la.', 18000, 10, 20, 'LB0002'),
('DO0004', 'Donut Chocolate', 'Bánh donut được phủ một lớp socola tan chảy.', 18000, 10, 20, 'LB0002'),
('DO0005', 'Donut Matcha', 'Bánh donut được phủ một lớp matcha.', 20000, 10, 20, 'LB0002'),
('DO0006', 'Donut Nhân thạch', 'Bánh donut mềm xốp bên ngoài, nhân bên trong là thạch trái cây ngọt ngào, đa dạng hương vị.', 18000, 10, 20, 'LB0002'),
('CR0001', 'Croissant Truyền thống', 'Bánh sừng bò với lớp vỏ ngoài giòn và nhiều lớp bên trong mềm mịn, tạo hình cong đặc trưng.', 20000, 10, 20, 'LB0004'),
('CR0002', 'Croissant Chocolate', 'Bánh sừng bò truyền thống với nhân sô cô la thơm ngon bên trong.', 25000, 10, 20, 'LB0004'),
('CR0003', 'Croissant Hạnh nhân', 'Bánh sừng bò được phủ lớp kem hạnh nhân và hạnh nhân lát giòn rụm.', 30000, 10, 20, 'LB0004'),
('CR0004', 'Croissant Trứng muối', 'Bánh sừng bò với nhân trứng muối mặn mà, kết hợp vị giòn của vỏ bánh và vị đậm đà của trứng muối.', 25000, 10, 20, 'LB0004'),
('BR0001', 'Bánh mì Baguette', 'Bánh mì baguette là loại bánh mì dài, có vỏ giòn và ruột mềm. Đây là một món ăn phổ biến trong ẩm thực Pháp và Việt Nam, thường được dùng để làm các loại bánh mì kẹp.', 15000, 180, 25, 'LB0003'),
('BR0002', 'Bánh mì Chuối', 'Bánh mì chuối có độ ẩm, xốp và ngọt tự nhiên từ chuối.', 50000, 20, 60, 'LB0003'),
('BR0003', 'Bánh mì Đen(Rye bread)', 'Vỏ bánh thường cứng hơn và có hương vị đậm đà.', 40000, 180, 35, 'LB0003'),
('BR0004', 'Bánh mì nguyên cám (Whole wheat bread)', 'Bánh mì làm từ bột mì nguyên cám, vỏ giòn và ruột mềm, giàu chất xơ.', 50000, 120, 40, 'LB0003'),
('BR0005', 'Bánh mì Hoa Cúc', 'Hương vị thơm ngon, mềm mịn và thớ bánh xốp.', 60000, 120, 30, 'LB0003'),
('BR0006', 'Bánh mì Bagel', 'Bánh mì hình vòng, vỏ ngoài giòn, ruột dai.', 30000, 90, 25, 'LB0003'),


INSERT INTO Feedback (FeedBackID, CustomerID, Content, FeedBackDate, FeedBackPoint, ProductID) VALUES 
('FB0001', 'KH0001', 'Great taste!', '2024-08-02', 5, 'MU0001'),
('FB0002', 'KH0002', 'Very delicious!', '2024-08-03', 4, 'MU0002'),
('FB0003', 'KH0003', 'Loved it!', '2024-08-03', 5, 'CR0001'),
('FB0004', 'KH0004', 'Could be better.', '2024-08-03', 3, 'DO0002'),
('FB0005', 'KH0005', 'Excellent!', '2024-08-04', 5, 'CR0003');

INSERT INTO Cart (CartID, CustomerID, ProductID, CartItemQuantity) VALUES
('GH0001', 'KH0001', 'DO0001', 2),
('GH0002', 'KH0002', 'CR0002', 3),
('GH0003', 'KH0003', 'MU0003', 1),
('GH0004', 'KH0004', 'DO0004', 2),
('GH0005', 'KH0005', 'CR0004', 4);


INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity, UnitPrice) VALUES 
('CT0001', 'DH0001', 'CR0002', 4, 25000),
('CT0002', 'DH0001', 'MU0001', 2, 12000),
('CT0003', 'DH0001', 'MU0004', 3, 12000),
('CT0004', 'DH0001', 'DO0001', 1, 15000),
('CT0005', 'DH0001', 'CR0001', 2, 20000);

INSERT INTO Inventory (IngredientID, IngredientName, StockQuantity, Unit) VALUES
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
('IN0037', 'Lòng đỏ trứng muối', 100, 'quả'),
('IN0038', 'Bột mì nguyên cám', 5000, 'g'),
('IN0039', 'Sữa bột', 10000, 'g'),
('IN0040', 'Hạt chia', 1000, 'g'),
('IN0041', 'Siro Maple', 5000, 'ml'),
('IN0042', 'Bột yến mạch', 5000, 'g');

INSERT INTO Supplier (SupplierID, SupplierName, PhoneNumber, Address) VALUES
('SU0001', 'Fresh Farms', '0123456789', '123 Farm Lane, HCMC'),
('SU0002', 'Green Valley', '0987654321', '456 Organic Street, HCMC'),
('SU0003', 'Bakery Supplies Co.', '0912345678', '789 Baker Street, HCMC');

INSERT INTO ImportOrder (ImportOrderID, ImportOrderDate, TotalPrice, SupplierID) VALUES
('IO0001', '2023-08-01', 50000, 'SU0001'),
('IO0002', '2024-08-02', 75000, 'SU0002'),
('IO0003', '2024-08-03', 60000, 'SU0003');

INSERT INTO ImportOrderDetail (ImportOrderID, IngredientID, Quantity, ImportPrice) VALUES
('IO0001', 'IN0001', 50, 1000),
('IO0002', 'IN0038', 100, 2000),
('IO0002', 'IN0039', 50, 1500),
('IO0003', 'IN0040', 20, 3000),
('IO0003', 'IN0041', 10, 5000);

INSERT INTO Recipe (ProductID, IngredientID, Quantity) VALUES
('MU0001', 'IN0001', 10),
('MU0002', 'IN0001', 15),
('MU0002', 'IN0016', 3),
('CR0001', 'IN0001', 20),
('CR0001', 'IN0014', 15);

INSERT INTO Griller (GrillerID, GrillerName, GrillerStatus, MaximumQuantity) VALUES
('GR0001', 'Grill Master 3000', 'Active', 10),
('GR0002', 'Grill Pro 4000', 'Active', 12),
('GR0003', 'Grill King 5000', 'Inactive', 15);

INSERT INTO Payment (PaymentID, OrderID, PaymentType, PaymentStatus, PaymentDate, CustomerID) VALUES
('PA0001', 'DH0001', 'Credit Card', 'Completed', '2023-08-02', 'KH0001'),
('PA0002', 'DH0001', 'PayPal', 'Pending', '2024-08-04', 'KH0002'),
('PA0003', 'DH0001', 'Cash', 'Completed', '2024-08-04', 'KH0003');

INSERT INTO Employees (EmployeeID, Email, EmployeeName, Position, Salary, Gender) VALUES
('EM0001', 'nguyen.van.abc@example.com', 'Nguyễn Văn A', 'Chef', 15000000, 'Nam'),
('EM0002', 'phan.van.g@example.com', 'Phan Văn G', 'Baker', 12000000, 'Nam'),
('EM0003', 'vu.thi.h@example.com', 'Vũ Thị H', 'Cashier', 10000000, 'Nữ');

INSERT INTO ProductBatch (ProductBatchID, ProductID, GrillerID, Quantity, CookingTime) VALUES
('PB0001', 'MU0001', 'GR0001', 5, '2023-08-02'),
('PB0002', 'MU0002', 'GR0002', 8, '2024-08-04'),
('PB0003', 'CR0001', 'GR0003', 10, '2024-08-05');


-- Thêm dữ liệu vào bảng ProductImages
INSERT INTO ProductImages (ImageID, ProductID, ImageUrl) VALUES
('IMG0001', 'MU0001', 'https://example.com/images/muffin_chocolate.jpg'),
('IMG0002', 'MU0002', 'https://example.com/images/muffin_chuoi.jpg'),
('IMG0003', 'MU0003', 'https://example.com/images/muffin_viet_quat.jpg'),
('IMG0004', 'MU0004', 'https://example.com/images/muffin_mam_xoi.jpg'),
('IMG0005', 'MU0005', 'https://example.com/images/muffin_dau.jpg'),
('IMG0006', 'DO0001', 'https://example.com/images/donut_truyen_thong.jpg'),
('IMG0007', 'DO0002', 'https://example.com/images/donut_glazed.jpg'),
('IMG0008', 'CR0001', 'https://example.com/images/croissant_truyen_thong.jpg'),
('IMG0009', 'CR0002', 'https://example.com/images/croissant_chocolate.jpg'),
('IMG0010', 'CR0003', 'https://example.com/images/croissant_hanh_nhan.jpg');

-- Thêm dữ liệu vào bảng Nutrition
INSERT INTO Nutrition (NutritionID, ProductID, Calories, Fat, Carbs, Protein, Sugar) VALUES
('NU0001', 'MU0001', 384, 25, 38, 5, 29),
('NU0002', 'MU0002', 211, 9, 31, 3, 16),
('NU0003', 'MU0003', 226, 9, 32, 4, 15),
('NU0004', 'MU0004', 280, 12, 40, 4, 22),
('NU0005', 'MU0005', 377, 17, 52, 5, 27),
('NU0006', 'MU0006', 343, 19, 41, 5, 18),
('NU0007', 'MU0007', 292, 10, 47, 6, 28),
('NU0008', 'CR0001', 406, 21, 45, 0, 10),
('NU0009', 'CR0002', 450, 23, 52, 0, 16),
('NU0010', 'CR0003', 470, 27, 50, 0, 20),
('NU0011', 'CR0004', 460, 25, 48, 0, 12),
('NU00012', 'DO0001', 412, 22.9, 47, 0, 23.1),
('NU00013', 'DO0002', 426, 23, 51, 0, 0),
('NU00014', 'DO0003', 380, 23, 41, 0, 22),
('NU00015', 'DO0004', 417, 20, 57.4, 0, 32),
('NU00016', 'DO0005', 591, 54.5, 23, 0, 5),
('NU00017', 'DO0006', 340, 18.7, 39, 0, 21.1),
('NU00018', 'BR0001', 270, 1, 56, 8, 1),
('NU00019', 'BR0002', 350, 10, 60, 5, 2),
('NU00020', 'BR0003', 300, 2, 50, 9, 2),
('NU00021', 'BR0004', 300, 2, 20, 9, 2),
('NU00022', 'BR0005', 755, 35, 100, 20, 25),
('NU00023', 'BR0006', 300, 1.5, 50, 9, 5);