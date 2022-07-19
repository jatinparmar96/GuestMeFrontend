import { useNavigate } from 'react-router-dom';
import { RequestButtonWide, RequestButtonWideMobile } from '../../Components/Buttons/Buttons';
import ScreenWidth from '../../Components/ScreenSize/ScreenSize';
import SpeakerAvailability from '../../Components/SpeakersAvailability/SpeakerAvailability';
import VideoEmbed from '../../Components/VideoEmbed/VideoEmbed';
import style from './Speaker_TertiaryContainer.module.scss';

const SpeakerTertiaryInformation = (props) => {
  const navigate = useNavigate();
  const width = ScreenWidth();
  return (
    <>
      <div className={style.tertiaryContainer}>
        <div className={style.video}>
          <h4>Video</h4>
          <VideoEmbed video={props.speaker.videos} />
        </div>
        <div className={style.availabilityContainer}>
          <div className={style.availability}>
            <h4>Availability</h4>
            <SpeakerAvailability value={props.speaker.availability} />
          </div>
          <div className={style.button}>
              {width > 992 ? (
                <RequestButtonWide
                  text="Request"
                  onClick={() =>
                    navigate('/speakers/' + props.speaker.id + '/request')}
                />) : (
            <RequestButtonWideMobile
              text="Request"
              onClick={() =>
                navigate('/speakers/' + props.speaker.id + '/request')
              }
            />)}
          </div>
        </div>
      </div>
    </>
  );
};

export default SpeakerTertiaryInformation;
