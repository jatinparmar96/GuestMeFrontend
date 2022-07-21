import { useEffect, useRef, useState } from 'react';

const MultiSelect = (props) => {
  const [options, setOptions] = useState([]);
  const inputRef = useRef();

  const addOption = (option) => {
    if (option.trim().length > 0) {
      props.onChange([ ...options, option ]);
    }
  };

  useEffect(() => {
    setOptions(props.value || []);
  }, [props.value]);

  return (
    <div>
      <label>{props.label}</label>
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

      <ul>
        {options.map((option, index) => (
          <li key={index}>{option}</li>
        ))}
      </ul>
    </div>
  );
};

export default MultiSelect;
