import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button } from '@mui/material';
import { getAllGrillers, removeGriller, updateGriller } from '../../service/api';

const ContentContainer = styled.div`
  width: 100%;
  padding: 2vw;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 480px) {
    width: 60vw;
  }
`;
const SubmitButton = styled.button`
    width: 20%;
    height: 5vh;
    padding: 10px;
    background-color: #F48C48;
    border: 0px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 1vw;
    color: #fff;
    fontWeight: bold;
    &:hover {                                          
        color: #000;
    }
    @media (max-width: 768px) {
        font-size: 1.5vw;
        width: 40%;
    }

    @media (max-width: 480px) {
        font-size: 2vw;
        width: 45%;
    }
`;

const EditButton = styled.button`
  color: #4285F4; /* Màu chữ xanh */
  background-color: white; /* Nền trắng */
  border: none;
  text-transform: none;
  cursor: pointer; /* Con trỏ dạng tay khi rê chuột vào */

  &:hover {
    background-color: #f1f1f1; /* Màu nền thay đổi khi rê chuột */
    color: #4285F4; /* Đảm bảo màu chữ vẫn là xanh khi hover */
  }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px; 
    tr {
        &:nth-child(even):
            background-color: #F48C48;

        &:hover:
            background-color: #f1f1f1;
    } 
                  
    th {
        padding: 10px;
        border: none;
        text-align: left;
        background-color: #F48C48;
        color: white;
        font-weight: bold;
    }
        
    
    tbody tr {
        :nth-child(even):
            background-color: #f9f9f9;

        :hover:
            background-color: #f1f1f1;
    }

    td {
        padding: 10px;
        border: none;
        text-align: left;

        &.center:
            text-align: center;
    }                       
`;

const TableContainer = styled(Box)`
    margin: 10px 10px;
    padding: 0 2vw;
    @media (max-width: 768px) {
    width: 50vw;
    }
    @media (max-width: 480px) {
        width: 60vw;
    }
`;

const TileDiv = styled.div`
    width: 100%;
    margin: 10px 0px;
    padding: 10px 5px;
    font-family: Tahoma, sans-serif;
    font-size: 1.3vw;
    @media (max-width: 768px) {
        font-size: 2vw;
    }
    @media (max-width: 480px) {
        font-size: 3vw;
    }
`;

export default function Griller(){
    const [grillers, setGrillers] = useState([]);
    const getGrillers = async() => {
        try{
            const data = await getAllGrillers();
            
            if (data.status && Array.isArray(data.grillers)) {
                setGrillers(data.grillers);
            } else {
                console.error('Grillers is not an array or status is false:', data.grillers);
            }
            
        }catch(err){
            console.error('Error fetching data:', err);
        }
    }
    const handleRemoveGriller = async (GrillerID) => {
        try {
          await removeGriller(GrillerID);
          getGrillers();
        } catch (error) {
          console.error('Error confirming order:', error);
        }
      };
    
      const handleUpdateGriller = async (GrillerID) => {
        try {
          await updateGriller(GrillerID);
          getGrillers();
        } catch (error) {
          console.error('Error confirming order:', error);
        }
      };
    useEffect(()=>{
      getGrillers();
      console.log('res: ', );
    },[]) 
    return (
        <ContentContainer>
        <TableContainer>
            <TileDiv style={{ color: '#F48C48', fontWeight: 600 }}>Quản lý lò nướng</TileDiv>
            <Table>
                <thead>
                <tr>
                    <th align="left" style={{ color: 'white',borderTopLeftRadius: '8px', borderBottomLeftRadius: '8px'}}>Mã lò nướng</th>
                    <th align="left" style={{ color: 'white'}}>Tên lò nướng</th>
                    <th align="left" style={{ color: 'white'}}>Trạng thái</th>
                    <th></th>
                    <th style={{borderTopRightRadius: '8px', borderBottomRightRadius: '8px'}}></th>

                </tr>
                </thead>
                <tbody>
                {grillers.map((item, index) => (
                    <tr key={index}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <td>{item.GrillerID}</td>
                        <td>{item.GrillerName}</td>
                        <td>{item.GrillerStatus}</td>
                        <td align="center"><EditButton onClick={() => handleRemoveGriller(item.GrillerID)}>Xóa</EditButton></td>
                        <td align="center"><EditButton onClick={() => handleUpdateGriller(item.GrillerID)}>Cập nhập</EditButton></td>
                    </tr>
                ))}
                </tbody>
            </Table>
        </TableContainer>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <SubmitButton variant='primary' onClick={() => handleAddGriller()}>Thêm lò nướng mới</SubmitButton> 
            </div>
        </ContentContainer>
    )
};
