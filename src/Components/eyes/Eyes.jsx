//@ts-check
import React from 'react';

import { ReactComponent as HiddenEye } from '../../assets/icons/password-hidden.svg';
import { ReactComponent as VisibleEye } from '../../assets/icons/open-eye.svg';

import style from './Eye.module.scss';

/**@type {React.FC<Props>} */
const Eyes = (props) => {
  const { isVisible, handleClick } = props;
  return (
    <div onClick={() => handleClick()} className={style.eye}>
      {isVisible ? <VisibleEye /> : <HiddenEye />}
    </div>
  );
};

export default Eyes;

/**
 * @typedef {Object} Props
 * @property {boolean} isVisible
 * @property {Function} handleClick
 */
