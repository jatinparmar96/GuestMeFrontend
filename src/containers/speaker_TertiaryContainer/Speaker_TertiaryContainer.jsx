import { useNavigate } from 'react-router-dom';
import { RequestButtonWide } from '../../components/buttons/Buttons';
import SpeakerAvailability from '../../components/speakersAvailability/SpeakerAvailability';
import SpeakerVideo from '../../components/speakersVideo/SpeakerVideo';

const SpeakerTertiaryInformation = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <SpeakerVideo video={props.speaker.videos} />
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
