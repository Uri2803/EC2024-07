import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';


const BoxRating = styled(Box)`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1vw;    
`;
export default function RatingBox({value}) {
  return (
    <BoxRating 
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value}
        readOnly
        sx={{ 
            fontSize: '2vw',
            paddingTop: '1vw',
          }}
        
      />(88)
    </BoxRating >

  )
}
