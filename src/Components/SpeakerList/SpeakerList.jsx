import { Speaker } from '..//Speaker/Speaker';
import style from './SpeakerList.module.scss';

export const SpeakerList = ({ speakers }) => {
  const content =
    speakers !== undefined
      ? speakers.map((speaker) => (
          <Speaker speaker={speaker} key={speaker.id} />
        ))
      : null;

  return <div className={style.speakerList}>{content}</div>;
};
