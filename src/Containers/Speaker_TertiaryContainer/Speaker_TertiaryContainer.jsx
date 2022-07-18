import { useNavigate } from 'react-router-dom';
import { RequestButtonWide } from '../../Components/Buttons/Buttons';
import SpeakerAvailability from '../../Components/SpeakersAvailability/SpeakerAvailability';
import VideoEmbed from '../../Components/VideoEmbed/VideoEmbed';
import style from './Speaker_TertiaryContainer.module.scss';

const SpeakerTertiaryInformation = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.tertiaryContainer}>
        <div className={style.video}>
          <h4>Video</h4>
          <VideoEmbed video={props.speaker.videos} />
        </div>
        <SpeakerAvailability value={props.speaker.availability} />
        <div className="RequestButtonContainer">
          <RequestButtonWide
            text="Request"
            onClick={() =>
              navigate('/speakers/' + props.speaker.id + '/request')
            }
          />
        </div>
      </div>
    </>
  );
};

export default SpeakerTertiaryInformation;
