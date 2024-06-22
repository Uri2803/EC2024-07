import React from 'react';
import { Select, MenuItem, ListItemIcon, Avatar } from '@mui/material';
import vnFlag from '../assets/vnFlag.png'; // Import flag images for Vietnam
import usFlag from '../assets/usFlag.jpg'; // Import flag images for United States

const languages = [
  { code: 'en', name: 'English', flag: usFlag }, // Example: US flag image
  { code: 'vi', name: 'Tiếng Việt', flag: vnFlag }, // Example: Vietnam flag image
  // Add more languages as needed
];

const LanguageSelect = ({ selectedLanguage, onChange }) => {
  return (
    <Select
      value={selectedLanguage}
      onChange={onChange}
      displayEmpty
      inputProps={{ 'aria-label': 'select language' }}
      sx={{
        minWidth: 50,
        padding: '4px 12px', // Adjust padding as needed
        borderRadius: 0, // Remove border radius
        border: 'none', // Remove border
        backgroundColor: 'transparent', // Transparent background
        '&:focus': {
          backgroundColor: 'transparent', // Transparent background on focus
        },
      }}
    >
      {languages.map((lang) => (
        <MenuItem key={lang.code} value={lang.code} sx={{ padding: '8px 16px', minWidth: 100 }}>
          <ListItemIcon>
          <img
              src={lang.flag}
              alt={lang.name}
              style={{ width: 20, height: 15, marginRight: 8 }} // Adjust size and spacing as needed
            />
          </ListItemIcon>
        </MenuItem>
      ))}
    </Select>
  );
};

export default LanguageSelect;
