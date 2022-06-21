import style from './Speaker.module.scss';

export const Speaker = (props) => {
  /**@type {import('./SpeakerType').Speaker} */
  const speaker = props.speaker;

  return (
    <div className={style.speakerContainer}>
      <img
        src={speaker.profilePicture}
        alt={speaker.userName}
        className={style.img}
      />
      <div className={style.speakerTopRight}>
        <div className={style.speakerTop}>
          <p className={style.review}>{speaker.reviewCount} reviews</p>
          <span>☆</span>
        </div>
        <div>{speaker.userName + speaker.userLastname}</div>
        <div>{speaker.title}</div>
      </div>
      <div className={style.skills}>
        {speaker.expertise.map((expertise) => (
          <span key={expertise} className={style.skill}>
            {expertise}
          </span>
        ))}
      </div>
      <button className={style.viewProfile}>View profile</button>
    </div>
  );
};
