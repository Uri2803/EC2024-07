import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import styled from 'styled-components';

// Styling for the rating box container
const BoxRating = styled(Box)`
  display: flex;
  align-items: center; 
  font-size: 1vw;  
`;

// Component for displaying rating and review count
export default function RatingBox({ value }) {
  return (
    <BoxRating 
      sx={{
        '& > legend': { mt: 2 },
      }}
    >
      <Rating
        name="simple-controlled"
        value={value.value}
        readOnly
        sx={{ 
            fontSize: '2vw',
            marginRight: '10px',
        }}
      />
      <Typography variant="body2" sx={{ color: 'gray' }}>
        {value.reviews}
      </Typography>
    </BoxRating>
  );
}
