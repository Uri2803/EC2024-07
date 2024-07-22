import React, {useState} from 'react'
import {IconButton, Collapse} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import styled from 'styled-components';


const TitleFilter = styled.div`
    font-size: 1.3vw;
    margin-top: 10px;
    width: 25vw;

`;
const TextFilter = styled.p`
  font-family: Tahoma, sans-serif; 
  color: #C4C4C4;
  font-weight: 550;
  @media (max-width: 768px) {
    font-size: 1vw;
  }
  @media (max-width: 480px) {
    font-size: 1vw;
  }
`;
export default function Filter({filter}) {
   

  const [open, setOpen] = useState(true);
  return (
    <div>
        <TitleFilter> {filter.tile}
        <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon sx={{fontSize: '2vw'}} /> : <KeyboardArrowDownIcon sx={{fontSize: '2vw'}}  />}
            </IconButton>
        </TitleFilter>
    <Collapse in={open} timeout="auto" unmountOnExit>
      {filter.option.map((item, index) => (
        <TextFilter key={index}>{item.value}</TextFilter>
      ))}
    </Collapse>
    
    </div>
  )
}
