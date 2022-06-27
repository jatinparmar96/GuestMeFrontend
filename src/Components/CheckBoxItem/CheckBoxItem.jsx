import React from 'react';
import style from './CheckBoxItem.module.scss';

/**@type {React.FC<{label: string, propName?: string, onClick?: Function}>} */
export const CheckBoxItem = ({
  name,
  label,
  propName = label,
  onClick,
  checked,
}) => {
  return (
    <div className={style.row}>
      <input
        type="checkbox"
        name={name}
        value={propName}
        id={propName}
        onClick={onClick ? (event) => onClick(event) : null}
        checked={checked}
      />
      <label htmlFor={propName}>{label}</label>
    </div>
  );
};
