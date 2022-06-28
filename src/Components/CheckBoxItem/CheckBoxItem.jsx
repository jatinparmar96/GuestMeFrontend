import React, { useEffect, useRef } from 'react';
import style from './CheckBoxItem.module.scss';

/**@type {React.FC<{label: string, propName?: string, onClick?: Function}>} */
export const CheckBoxItem = ({
  name,
  label,
  propName = label,
  onChange,
  checked,
}) => {
  const checkboxRef = useRef();

  useEffect(() => {
    checkboxRef.current.checked = checked;
  }, [checked]);

  return (
    <div className={style.row}>
      <input
        type="checkbox"
        name={name}
        value={propName}
        id={propName}
        onChange={onChange ? (event) => onChange(event) : null}
        ref={checkboxRef}
      />
      <label htmlFor={propName}>{label}</label>
    </div>
  );
};
