import React, { useState } from 'react';
import { Grid, TextField, Slider, InputAdornment, Box } from '@mui/material';
import styled from 'styled-components';

const PriceFilter = styled(TextField)`
    .MuiInputBase-root {
        height: 2.5vw;
        font-size: 1vw;
        padding: 0px;
    }
    .MuiInputAdornment-root {
        font-size: 0.7vw;
        margin-left: 0px;
        padding: 0px;
    }
    .MuiInputLabel-root {
        font-size: 1vw;
        transform: translate(0.7vw, -1vw) scale(1);
        padding: 0px;
    }
`;

const TitleFilter = styled.div`
    font-size: 1.3vw;
    margin: 2vw 0px;
`;

const CustomSlider = styled(Slider)`
    .MuiSlider-root {
        font-size: 3vw;
        margin: 0;
        padding: 0;
    }
    .MuiSlider-thumb {
        width: 1.5vw;
        height: 1.5vw;
        background-color: Orange;
        border: 1px solid #666;
    }
    .MuiSlider-rail {
        height: 0.5vw;
        background-color: #F48C48;
        border: 1px solid #666;
    }
    .MuiSlider-track {
         height: 0.5vw;
        background-color: Orange;
        border: 1px solid #666;
    }
    .MuiSlider-mark {
        display: none;
    }
    .MuiSlider-markLabel {
        display: none;
    }
`;

export default function FilterPrice() {
    const formatValue = (value) => {
        return `${Math.round(value / 1000).toLocaleString('vi-VN')}.000đ`;
    };

    const [value, setValue] = useState([1000, 500000]);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleFromChange = (event) => {
        const newValue = [Number(event.target.value.replace(/\./g, '')) * 1000, value[1]];
        setValue(newValue);
    };

    const handleToChange = (event) => {
        const newValue = [value[0], Number(event.target.value.replace(/\./g, '')) * 1000];
        setValue(newValue);
    };

    return (
        <>
            <TitleFilter>Khoảng giá</TitleFilter>
            <Grid container spacing={1} sx={{ width: '100%', maxWidth: '600px' }}>
                <Grid item xs={6} sx={{ padding: 0, margin: 0 }}>
                    <PriceFilter
                        id="outlined-basic"
                        label="Từ"
                        variant="outlined"
                        type="text"
                        value={formatValue(value[0])}
                        onChange={handleFromChange}
                    />
                </Grid>
                <Grid item xs={6} sx={{ padding: 0, margin: 0 }}>
                    <PriceFilter
                        id="outlined-basic"
                        label="Đến"
                        variant="outlined"
                        type="text"
                        value={formatValue(value[1])}
                        onChange={handleToChange}
                    />
                </Grid>
                <Grid item xs={12} sx={{ padding: 0, margin: 0 }}>
                    <CustomSlider 
                        sx={{ padding: 0, margin: 0 }}
                        getAriaLabel={() => 'Minimum distance shift'}
                        value={value}
                        onChange={handleChange}
                        valueLabelDisplay="auto"
                        valueLabelFormat={formatValue}
                        disableSwap
                        min={1000}
                        max={500000}
                    />
                </Grid>
            </Grid>
        </>
    );
}
