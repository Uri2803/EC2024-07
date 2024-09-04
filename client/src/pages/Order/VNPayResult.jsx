import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, CircularProgress, Alert } from '@mui/material';
import { vnpaysuccess } from  '../../service/api';

const PaymentResult = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const verifyPayment = async () => {
      const queryParams = new URLSearchParams(location.search);
      const params = Object.fromEntries(queryParams.entries());
      console.log(params)

      try {
        const response = await vnpaysuccess(params)
        
        if (response.data.status) {
          setResult(response.data.message);
        } else {
          setError(response.data.error);
        }
      } catch (err) {
        setError('Lỗi khi xác thực thanh toán.');
      } finally {
        setLoading(false);
      }
    };

    verifyPayment();
  }, [location.search]);

  return (
    <div>
      {loading && <CircularProgress />}
      {result && <Typography>{result}</Typography>}
      {error && <Alert severity="error">{error}</Alert>}
    </div>
  );
};

export default PaymentResult;
