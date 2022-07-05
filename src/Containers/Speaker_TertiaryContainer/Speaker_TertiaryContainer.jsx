import { useNavigate } from 'react-router-dom';
import { RequestButtonWide } from '../../Components/Buttons/Buttons';
import SpeakerAvailability from '../../Components/SpeakersAvailability/SpeakerAvailability';
import SpeakerVideo from '../../Components/SpeakersVideo/SpeakerVideo';

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
