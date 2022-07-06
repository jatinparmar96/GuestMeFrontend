import { Speaker } from '../speaker/Speaker';
import style from './SpeakerList.module.scss';

export const SpeakerList = ({ speakers }) => {
  const content =
    speakers !== undefined
      ? speakers.map((speaker, index) => (
          <Speaker speaker={speaker} key={index} />
        ))
      : null;

  return <div className={style.speakerList}>{content}</div>;
};
