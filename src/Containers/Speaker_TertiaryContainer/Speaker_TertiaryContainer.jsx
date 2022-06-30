import { RequestButtonWide } from '../../Components/Buttons/Buttons';
import SpeakerAvailability from '../../Components/SpeakersAvailability/SpeakerAvailability';
import SpeakerVideo from '../../Components/SpeakersVideo/SpeakerVideo';

const SpeakerTertiaryInformation = (props) => {
  return (
    <>
      <div>
        <SpeakerVideo video={props.speaker.videos} />
        <SpeakerAvailability />
        <div className="RequestButtonContainer">
          <RequestButtonWide
            text="Request"
            // onClick={}
          />
        </div>
      </div>
    </>
  );
};

export default SpeakerTertiaryInformation;
