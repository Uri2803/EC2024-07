import React, { useState } from 'react';
import styled from 'styled-components';
import  {Button} from '@mui/material'
import { useCart } from '../../context/CartContext'; 


const StyleSpan = styled.span`
    border: 1px solid black; 
    padding: 10px;
    width: 4vw;
    display: flext;
    flex-direction: row;
`;
export default function ProductQuantity({quantity, productID}) {
    const [count, setCount] = useState(quantity);
    const { updateCartQuantity, removeFromCart } = useCart();

    const handleIncrement = async () => {
      try {
          setCount(prevCount => {
              const newCount = prevCount + 1;
              updateCartQuantity(productID, newCount); // Cập nhật số lượng sản phẩm trên server
              return newCount;
          });
      } catch (error) {
          console.error('Error incrementing quantity:', error);
      }
  };

  const handleDecrement = async () => {
    if (count > 1) {
      try {
          setCount(prevCount => {
              const newCount = prevCount - 1;
              updateCartQuantity(productID, newCount); // Cập nhật số lượng sản phẩm trên server
              return newCount;
          });
      } catch (error) {
          console.error('Error decrementing quantity:', error);
      }
  } else if (count === 1) {
      // Xóa sản phẩm khỏi giỏ hàng nếu số lượng trở về 0
      try {
          await removeFromCart(productID);
          setCount(0);
      } catch (error) {
          console.error('Error removing from cart:', error);
      }
  }
  };

  return (
    <>
         <Button onClick={handleDecrement}
            sx={{
                borderRadius: "5px 0 0 5px",
                height: '2vw',
                maxHeight: '3vw',
                minWidth: '3vw',
                width: '2.5vw',
                backgroundColor: 'transparent',
                color: '#000',
                border: '1px solid #ccc',
                padding: 0,
                '&:hover': {
                  backgroundColor: 'orange',
                  borderColor: 'transparent', 
                },
                
              }}
            >
            -
            </Button>
   
            <Button onClick={handleDecrement}
            sx={{
                borderRadius: 0,
                height: '2vw',
                maxHeight: '3vw',
                minWidth: '3vw',
                width: '2.5vw',
                backgroundColor: 'transparent',
                color: '#000',
                border: '1px solid #ccc',
                padding: 0,
                '&:hover': {
                  borderColor: 'transparent', 
                },
                
              }}
            >
            {count}
            </Button>
            <Button onClick={handleIncrement}
            sx={{
                borderRadius: "0 5px 5px 0",
                height: '2vw',
                maxHeight: '3vw',
                minWidth: '3vw',
                width: '2.5vw',
                backgroundColor: 'transparent',
                color: '#000',
                border: '1px solid #ccc',
                padding: 0,
                '&:hover': {
                  backgroundColor: 'orange',
                  borderColor: 'transparent', 
                },
                
              }}
            >
            -
            </Button>
    </>
  )
}
