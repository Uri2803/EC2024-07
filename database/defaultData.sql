
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
('nguyen.van.abc@example.com', 'password11', 'nguyenvanabc', 'Employee');


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
('LB0003','Baguette'),
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
('CR0004', 'Croissant Trứng muối', 'Bánh sừng bò với nhân trứng muối mặn mà, kết hợp vị giòn của vỏ bánh và vị đậm đà của trứng muối.', 25000, 10, 20, 'LB0004');

INSERT INTO Feedback (FeedBackID, CustomerID, Content, FeedBackDate, FeedBackPoint, ProductID) VALUES 
('FB0001', 'KH0001', 'Great taste!', '2024-08-02', 5, 'MU0001');

INSERT INTO Cart (CartID, CustomerID, ProductID, CartItemQuantity) VALUES
('GH0001', 'KH0001', 'DO0001', 2);

INSERT INTO OrderDetails (OrderDetailID, OrderID, ProductID, Quantity, UnitPrice) VALUES 
('CT0001', 'DH0001', 'CR0002', 4, 25000);

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
('IN0037', 'Lòng đỏ trứng muối', 100, 'quả');

INSERT INTO Supplier (SupplierID, SupplierName, PhoneNumber, Address) VALUES
('SU0001', 'Fresh Farms', '0123456789', '123 Farm Lane, HCMC');

INSERT INTO ImportOrder (ImportOrderID, ImportOrderDate, TotalPrice, SupplierID) VALUES
('IO0001', '2023-08-01', 50000, 'SU0001');

INSERT INTO ImportOrderDetail (ImportOrderID, IngredientID, Quantity, ImportPrice) VALUES
('IO0001', 'IN0001', 50, 1000);

INSERT INTO Recipe (ProductID, IngredientID, Quantity) VALUES
('MU0001', 'IN0001', 10);

INSERT INTO Griller (GrillerID, GrillerName, GrillerStatus, MaximumQuantity) VALUES
('GR0001', 'Grill Master 3000', 'Active', 10);

INSERT INTO Payment (PaymentID, OrderID, PaymentType, PaymentStatus, PaymentDate, CustomerID) VALUES
('PA0001', 'DH0001', 'Credit Card', 'Completed', '2023-08-02', 'KH0001');

INSERT INTO Employees (EmployeeID, Email, EmployeeName, Position, Salary, Gender) VALUES
('EM0001', 'nguyen.van.abc@example.com', 'Nguyễn Văn A', 'Chef', 15000000, 'Nam');

INSERT INTO ProductBatch (ProductBatchID, ProductID, GrillerID, Quantity, CookingTime) VALUES
('PB0001', 'MU0001', 'GR0001', 5, '2023-08-02');

INSERT INTO Coupon (CouponID, ExpiryDate, CouponDescription) VALUES 
    ('FREESHIP', '2024-12-31', 'Miễn ship cho đơn hàng trên 150k'),
    ('MUNG2THANG9', '2024-12-31', '10% trên toàn bộ đơn hàng'),
    ('GIANGSINH', '2024-12-31', '10% trên toàn bộ đơn hàng'),
    ('LVMINH', '2024-12-31', '20% trên toàn bộ đơn hàng'),
    ('EC07', '2024-12-31', '10% trên toàn bộ đơn hàng');
