import React, { useState } from 'react';
import { createPaymentUrl } from  '../../service/api';
import { Box, Avatar, Select, Grid, MenuItem, Typography } from '@mui/material';
import styled from 'styled-components';// Đảm bảo đường dẫn chính xác
const VNPayBox = styled.div`
  width: 100%;
  margin: 2vw 0;
`;
const PaymentSubmit = styled.div`
  width: 100%;
  height: 3.5vw;
  padding: 10px;
  background-color: #f48c48;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Thêm cursor pointer để hiển thị con trỏ khi hover */
  position: relative;

`
const VNPay = ({totalPayment}) => {
    console.log('abc',totalPayment)
    const [amount, setAmount] = useState(totalPayment/100); // Ví dụ: Số tiền cần thanh toán
    const [bankCode, setBankCode] = useState('NCB'); // Mã ngân hàng
    const [orderDescription, setOrderDescription] = useState('Thanh toán đơn hàng XYZ');
    const [orderType, setOrderType] = useState('billpayment'); // Loại đơn hàng
    const [language, setLanguage] = useState('vn'); // Ngôn ngữ
    
    const handleVNPayPayment = async () => {
        try {
            const paymentUrl = await createPaymentUrl(amount, bankCode, orderDescription, orderType, language);
            window.location.href = paymentUrl; // Chuyển hướng tới URL thanh toán
        } catch (error) {
            console.error('Error creating VNPay payment URL:', error);
            // Xử lý lỗi nếu có
        }
    };

    return (
       

        <VNPayBox>
        <PaymentSubmit onClick={handleVNPayPayment}><Typography variant='h6'> Thanh Toán VNPay  </Typography></PaymentSubmit>
        </VNPayBox>
    );
};

export default VNPay;
