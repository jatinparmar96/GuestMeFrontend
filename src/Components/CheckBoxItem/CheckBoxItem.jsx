import React from 'react';
import style from './CheckBoxItem.module.scss';

/**@type {React.FC<{label: string, propName?: string, onClick?: Function}>} */
const CheckBoxItem = ({ name, label, propName = label }) => {
  return (
    <div className={style.row}>
      <input type="checkbox" name={name} value={propName} id={propName} />
      <label htmlFor={propName}>{label}</label>
    </div>
  );
};

export default CheckBoxItem;
