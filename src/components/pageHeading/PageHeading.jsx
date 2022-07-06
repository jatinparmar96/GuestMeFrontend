import React from 'react';
import style from './PageHeading.module.scss'

/**@type {React.FC<{text: string}>} */
export const PageHeading = (props) => {
  return (
    <div className={style.pageHeading}>
      <h2 className={style.heading}>{props.text}</h2>
      <div className="right">
        <p>
          <span>Icon</span>Firstname Lastname
        </p>
        <button>Logout</button>
      </div>
      {/* Bread Crumbs may be put */}
    </div>
  );
};
