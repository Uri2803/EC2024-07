import React, { useState, useEffect } from 'react';
import { Typography, Button, Modal, Box, TextField } from '@mui/material';
import { updateCoupon } from '../../service/api';
import { format, parseISO } from 'date-fns';


export default function CouponModal({ open, onClose, coupon, onSave }) {
    const [expiryDate, setExpiryDate] = useState(() => format(parseISO(coupon.ExpiryDate), 'yyyy-MM-dd'));
    const [couponDescription, setCouponDescription] = useState(coupon.CouponDescription);

    useEffect(() => {
        // Cập nhật trạng thái khi coupon thay đổi
        if (coupon && coupon.ExpiryDate) {
            setExpiryDate(format(parseISO(coupon.ExpiryDate), 'yyyy-MM-dd'));
            setCouponDescription(coupon.CouponDescription);
        }
    }, [coupon]);

    const handleSave = async () => {
        if (!expiryDate || !couponDescription) {
            alert('Vui lòng điền đầy đủ thông tin.');
            return; // Dừng hàm nếu dữ liệu không hợp lệ
        }
        const updatedCoupon = { ...coupon, ExpiryDate: expiryDate, CouponDescription: couponDescription };
        try {
            await updateCoupon(updatedCoupon);
            onSave();
        } catch (error) {
            console.error('Error updating coupon:', error);
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
            Cập nhật Coupon <strong>{coupon.couponID}  </strong>
          </Typography>
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
  }
  