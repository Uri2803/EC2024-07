import React, { useState, useEffect } from 'react';
import { Typography, Button, Modal, Box, TextField } from '@mui/material';
import { newCoupon } from '../../service/api';
import { format, parseISO } from 'date-fns';

  export default function NewCouponModal({ open, onClose, onSave }) {
    const [couponID, setCouponID] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [couponDescription, setCouponDescription] = useState('');
  
    const handleSave = async () => {
        
        if (!expiryDate || !couponDescription || !couponID) {
          alert('Vui lòng điền đầy đủ thông tin.');
          return; // Dừng hàm nếu dữ liệu không hợp lệ
        }
        if (isNaN(new Date(expiryDate).getTime())) {
          alert('Ngày hết hạn không hợp lệ.');
          return;
        }
        const coupon = { CouponID: couponID, ExpiryDate: expiryDate, CouponDescription: couponDescription };
        try {
            await newCoupon(coupon);
            onSave(); // Thực hiện hành động sau khi cập nhật thành công
        } catch (error) {
            // Xử lý lỗi từ server
            if (error.response && error.response.status === 401) {
                alert(error.response.data.message); // Hiển thị thông báo lỗi lên màn hình
            } else {
                console.error('Lỗi khi thêm Coupon:', error);
                alert('Có lỗi xảy ra, vui lòng thử lại.');
            }
        }
    };
  return (
    <Modal open={open} onClose={onClose}>
      <Box 
        sx={{ 
          width: 400,
          backgroundColor: 'white', 
          padding: 4, 
          margin: '100px auto', 
          borderRadius: '8px', 
          boxShadow: 24,
          display: 'flex',
          flexDirection: 'column', 
          alignItems: 'center'
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          Thêm Coupon
        </Typography>
        <TextField
          label="Mã Coupon"
          value={couponID}
          onChange={(e) => setCouponID(e.target.value)}
          fullWidth 
          margin="normal"
        />
          <TextField
            label="Ngày hết hạn"
            type="date"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            fullWidth 
            margin="normal"
            InputLabelProps={{
              shrink: true,  
          }}
          />
        <TextField
          label="Mô tả"
          value={couponDescription}
          onChange={(e) => setCouponDescription(e.target.value)}
          fullWidth 
          margin="normal"
        />
        <Button 
          onClick={handleSave} 
          variant="contained" 
          color="primary"
          sx={{ marginTop: 2 }} 
        >
          Lưu
        </Button>
      </Box>
    </Modal>
  );
};