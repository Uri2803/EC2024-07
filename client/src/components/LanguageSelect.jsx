import React from 'react';
import { Select, MenuItem, ListItemIcon, InputBase } from '@mui/material';
import vnFlag from '../assets/vnFlag.png'; // Import flag images for Vietnam
import usFlag from '../assets/usFlag.jpg'; // Import flag images for United States

const languages = [
  { code: 'EN', name: 'English', flag: usFlag }, // Example: US flag image
  { code: 'VI', name: 'Tiếng Việt', flag: vnFlag }, // Example: Vietnam flag image
  // Add more languages as needed
];

const LanguageSelect = ({ selectedLanguage, onChange }) => {
  return (
    <Select
      value={selectedLanguage}
      onChange={onChange}
      displayEmpty
      input={<InputBase sx={{ bgcolor: '#fff', border: 'none' }} />} // Customized InputBase without border
      MenuProps={{ PaperProps: { style: { borderRadius: 4 } } }} // Customized PaperProps for Menu
      sx={{
        marginLeft: '1.5vw',
        minWidth: '10px',
        border: 'none', // Remove border
      }}
    >
      {languages.map((lang) => (
        <MenuItem key={lang.code} value={lang.code} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <ListItemIcon sx={{ minWidth: 'auto' }}>
            <img
              src={lang.flag}
              alt={lang.name}
              style={{ width: '1.5vw', marginRight: '1vw', marginTop: '1vh', objectFit: 'cover' }}
            />
          </ListItemIcon>
          <span>{lang.code}</span>
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelect;
