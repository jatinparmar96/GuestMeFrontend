//@ts-check
import React from 'react';

import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactComponent as HiddenEye } from '../../assets/icons/password-hidden.svg';
/**@type {React.FC<Props>} */
const Eyes = (props) => {
  const { isVisible, handleClick } = props;
  return (
    <div onClick={() => handleClick()}>
      {isVisible ? <FontAwesomeIcon icon={faEye} /> : <HiddenEye />}
    </div>
  );
};

export default Eyes;

/**
 * @typedef {Object} Props
 * @property {boolean} isVisible
 * @property {Function} handleClick
 */
