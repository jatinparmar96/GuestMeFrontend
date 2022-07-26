import { useEffect, useRef, useState } from 'react';
import style from './MultiSelect.module.scss';

import { ReactComponent as CloseIcon } from '../../../assets/icons/close-gray.svg';
const MultiSelect = (props) => {
  const [options, setOptions] = useState([]);
  const inputRef = useRef();

  const addOption = (option) => {
    if (option.trim().length > 0) {
      props.onChange([...options, option]);
    }
  };

  useEffect(() => {
    setOptions(props.value || []);
  }, [props.value]);

  const removeOption = (index) => {
    props.onChange(options.filter((o, i) => i !== index));
  };

  return (
    <div className={style.multiselect}>
      <label>{props.label}</label>
      <div className={style.input}>
        <input type="text" name="skills" ref={inputRef} />
        <button
          onClick={(e) => {
            e.preventDefault();
            addOption(inputRef.current.value);
            inputRef.current.value = '';
          }}
        >
          Add
        </button>
      </div>

      <ul>
        {options.map((option, index) => (
          <li key={index}>
            <CloseIcon onClick={() => removeOption(index)} />
            <span>{option}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
