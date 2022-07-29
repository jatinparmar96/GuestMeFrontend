//@ts-check
// import { Facebook } from '@mui/icons-material';
import React from 'react';
import { ReactComponent as LinkedIn } from '../../../../assets/icons/linkedin.svg';
// import { ReactComponent as Facebook } from '../../../../assets/icons/facebook.svg';
// import { ReactComponent as Instagram } from '../../../../assets/icons/instagram.svg';
// import { ReactComponent as Twitter } from '../../../../assets/icons/twitter.svg';

import style from './Member.module.scss';

/**@type {React.FC<Props>} */
const Member = (props) => {
  const { member } = props;
  return (
    <div className={style.memberContainer}>
      <img
        src={member.imageUrl}
        alt={member.name}
        className={style.memberImage}
      />
      <h5 className={style.memberHeading}> {member.name}</h5>
      <div>{member.role}</div>
      <div className={style.iconRow}>
        <a
          href={member.linkedInLink ?? 'https://facebook.com'}
          className={style.snsLink}
          target="_blank"
          rel="noreferrer"
        >
          <LinkedIn />
          <span className={style.linkedinName}>{member.linkedInName}</span>
        </a>

        {/* <a
          href={member.twitterLink ?? 'https://twitter.com'}
          className={style.snsLink}
        >
          <Twitter />
        </a> */}

        {/* <a
          href={member.instagramLink ?? 'https://www.instagram.com'}
          className={style.snsLink}
        >
          <Instagram />
        </a> */}
      </div>
      {member.introduction}
    </div>
  );
};

export default Member;

/**
 * @typedef {import('../../AboutPageType').Member} Member
 */

/**
 * @typedef {Object} Props
 * @property {Member}  member
 */
