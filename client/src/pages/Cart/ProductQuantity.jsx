import React, { useState } from 'react';
import styled from 'styled-components';
import  {Button} from '@mui/material'


const StyleSpan = styled.span`
    border: 1px solid black; 
    padding: 10px;
    width: 4vw;
    display: flext;
    flex-direction: row;
`;
export default function ProductQuantity() {
    const [count, setCount] = useState(1);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
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
            <Button onClick={handleDecrement}
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
