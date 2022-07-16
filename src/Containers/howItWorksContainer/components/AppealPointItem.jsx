//@ts-check
import React from 'react';
import style from './AppealPointItem.module.scss';
/**@type {React.FC<AppealPointItemProps>} */
const AppealPointItem = (props) => {
  const SVGComponent = props.icon;
  return (
    <div className={style.appealPointItem}>
      <div className={style.iconContainer}>
        <SVGComponent />
      </div>

      <p className={style.description}>{props.text}</p>
    </div>
  );
};

export default AppealPointItem;

/**
 * @typedef {Object} AppealPointItemProps
 * @property {React.FunctionComponent<React.SVGProps<SVGSVGElement>>} icon
 * @property {string} text
 */
