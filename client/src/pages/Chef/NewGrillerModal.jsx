import React, { useState } from 'react';
import { Typography, Button, Modal, Box, TextField } from '@mui/material';
import { newGriller } from '../../service/api';

  export default function NewGrillerModal({ open, onClose, onSave }) {
    const [grillerID, setGrillerID] = useState();
    const [grillerName, setGrillerName] = useState();
    const [grillerStatus, setGrillerStatus] = useState();
  
    const handleSave = async () => {
        const griller = { GrillerID: grillerID, GrillerName: grillerName, GrillerStatus: grillerStatus };
    
        try {
            await newGriller(griller);
            alert('Thêm thành công');
            onSave(); // Thực hiện hành động sau khi cập nhật thành công
        } catch (error) {
            // Xử lý lỗi từ server
            if (error.response && error.response.status === 401) {
                alert(error.response.data.message); // Hiển thị thông báo lỗi lên màn hình
            } else {
                console.error('Lỗi khi cập nhật griller:', error);
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
          Thêm Lò Nướng
        </Typography>
        <TextField
          label="ID lò nướng"
          value={grillerID}
          onChange={(e) => setGrillerID(e.target.value)}
          fullWidth 
          margin="normal"
        />
        <TextField
          label="Tên lò nướng"
          value={grillerName}
          onChange={(e) => setGrillerName(e.target.value)}
          fullWidth 
          margin="normal"
        />
        <TextField
          label="Trạng thái"
          value={grillerStatus}
          onChange={(e) => setGrillerStatus(e.target.value)}
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