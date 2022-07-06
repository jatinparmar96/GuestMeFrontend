import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useEffect, useState } from 'react';
import { CheckBoxItem } from '../checkBoxItem/CheckBoxItem';
import style from './RangeSlider.module.scss';

const minDistance = 0;

export const RangeSlider = (props) => {
  const { setPrice, priceMax } = props;
  const [value, setValue] = useState([0, priceMax]);
  const [checkedFree, setCheckedFree] = useState(false);

  useEffect(() => {
    setAllPriceStates([0, priceMax]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [priceMax]);

  const handleChange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    let newValues =
      activeThumb === 0
        ? [Math.min(newValue[0], value[1] - minDistance), value[1]]
        : [value[0], Math.max(newValue[1], value[0] + minDistance)];

    setAllPriceStates(newValues);
    setCheckedFree(newValues[0] === 0 && newValues[1] === 0);
  };

  const setAllPriceStates = (newValues) => {
    setValue(newValues);
    setPrice(newValues);
  };

  const handleClickFree = ({ target: { checked } }) => {
    if (checked) {
      setAllPriceStates([0, 0]);
      setCheckedFree(true);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <CheckBoxItem
        label="Free"
        onChange={handleClickFree}
        checked={checkedFree}
      />
      <Slider
        getAriaLabel={() => 'Minimum distance'}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={(value) => `${value}`}
        disableSwap
        min={0}
        max={priceMax}
        defaultValue={[0, priceMax]}
      />
      <div className={style.displayValueContainer}>
        <span>${value[0]}</span>
        <span>${value[1]}</span>
      </div>
    </Box>
  );
};

// Reference Source: https://mui.com/material-ui/react-slider/
