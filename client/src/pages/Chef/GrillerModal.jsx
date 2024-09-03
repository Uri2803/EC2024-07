import React, { useState } from 'react';
import { Typography, Button, Modal, Box, TextField } from '@mui/material';
import { updateGriller } from '../../service/api';

  export default function GrillerModal({ open, onClose, griller, onSave }) {
    const [grillerName, setGrillerName] = useState(griller.name);
    const [grillerStatus, setGrillerStatus] = useState(griller.status);
  
  const handleSave = async () => {
    if (!grillerName || !grillerStatus) {
      alert('Vui lòng điền đầy đủ thông tin.');
      return; // Dừng hàm nếu dữ liệu không hợp lệ
    }
    const updatedGriller = { ...griller, GrillerName: grillerName, GrillerStatus: grillerStatus };
    // console.log(updatedGriller);
    try {
      await updateGriller(updatedGriller);
      onSave();
    } catch (error) {
      throw error;
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
            Cập nhật Lò Nướng <strong>{griller.GrillerID}  </strong>
          </Typography>
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
  }
  