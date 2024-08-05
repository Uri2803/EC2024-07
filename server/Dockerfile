# Sử dụng hình ảnh Node.js chính thức làm base image
FROM node:14

# Tạo thư mục làm việc trong container
WORKDIR /usr/src/app

# Sao chép file package.json và package-lock.json vào container
COPY package*.json ./

# Cài đặt các dependencies
RUN npm install

# Sao chép toàn bộ mã nguồn vào container
COPY . .

# Chỉ định cổng mà ứng dụng sẽ lắng nghe
EXPOSE 3000

# Lệnh để khởi chạy ứng dụng
CMD ["node", "app.js"]
