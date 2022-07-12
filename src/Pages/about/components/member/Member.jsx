//@ts-check
import React from 'react';

import {
  faFacebookF,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          href={member.facebookLink ?? 'https://facebook.com'}
          className={style.snsLink}
        >
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a
          href={member.twitterLink ?? 'https://twitter.com'}
          className={style.snsLink}
        >
          <FontAwesomeIcon icon={faTwitter} />
        </a>

        <a
          href={member.instagramLink ?? 'https://www.instagram.com'}
          className={style.snsLink}
        >
          <FontAwesomeIcon icon={faInstagram} />
        </a>
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
