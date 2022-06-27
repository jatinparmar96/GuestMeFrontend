import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useState } from 'react';

import style from './RangeSlider.module.scss';

const minDistance = 0;

export const RangeSlider = () => {
  const [value, setValue] = useState([0, 500]);

  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue([Math.min(newValue[0], value[1] - minDistance), value[1]]);
    } else {
      setValue([value[0], Math.max(newValue[1], value[0] + minDistance)]);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange1}
        valueLabelDisplay="auto"
        getAriaValueText={(value) => `${value}`}
        disableSwap
      />
      <div className={style.displayValueContainer}>
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </Box>
  );
};

// Reference Source: https://mui.com/material-ui/react-slider/
