//@ts-check
import style from './Speaker.module.scss';

import { Link } from 'react-router-dom';

export const Speaker = (props) => {
  /**@type {import('./SpeakerType').SpeakerResponse} */
  const speaker = props.speaker;

  return (
    <div className={style.speakerContainer}>
      <img
        src={speaker.profilePicture}
        alt={speaker.fullName}
        className={style.img}
      />
      <div className={style.speakerTopRight}>
        <div className={style.speakerTop}>
          <p className={style.review}>{speaker.reviewsQuantity} reviews</p>
          <span>☆</span>
        </div>
        <div>{speaker.fullName}</div>
        <div>{speaker.tagline}</div>
      </div>
      <div className={style.skills}>
        {speaker.conditions.interests.map((interest) => (
          <span key={interest} className={style.skill}>
            {interest}
          </span>
        ))}
      </div>
      <Link to={`/speaker-profile:${speaker.id}`} className={style.viewProfile}>
        View profile
      </Link>
    </div>
  );
};
