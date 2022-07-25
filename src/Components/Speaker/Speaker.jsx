import style from './Speaker.module.scss';

import { Link } from 'react-router-dom';
import star from '../../assets/icons/star.svg';

export const Speaker = (props) => {
  /**@type {import('./SpeakerType').SpeakerResponse} */

  const speaker = props.speaker;

  const reviews = (str, reviewCount) => {
    if (reviewCount) {
      return `${reviewCount} ${reviewCount > 1 ? 'reviews' : 'review'}`;
    }
  };
  return (
    <div className={style.speakerContainer}>
      <div className={style.speakerInfoContainer}>
        <img
          src={speaker.profilePicture}
          alt={speaker.fullName}
          className={style.img}
        />
        <div className={style.speakerTopRight}>
          <div className={style.speakerTop}>
            <p className={style.review}>
              {reviews`${speaker.reviewsQuantity}`}
            </p>
            <span><img src={star} alt="save speaker"/> </span>
          </div>
          <div className={style.speakerName}>{speaker.fullName}</div>
          <div className={style.tagline}>{speaker.tagline}</div>
        </div>
      </div>
      <div className={style.skillsContainer}>
        {speaker?.skills?.map((skill) => (
          <span key={skill} className={style.skill}>
            {skill}
          </span>
        ))}
      </div>
      <Link to={`/speakers/${speaker.id}`} className={style.viewProfile}>
        View profile
      </Link>
    </div>
  );
};
