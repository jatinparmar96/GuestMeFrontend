import { RequestButton, SaveButton } from '../../Components/Buttons/Buttons';
import SpeakerInfo from '../../Components/SpeakerProfileInfo/SpeakerProfileInfo';

const SpeakerPrimaryInformation = (props) => {
  return (
    <>
      <div>
        <SpeakerInfo speaker={props.speaker} />
        <div className="SaveButtonContainer">
          <SaveButton
            text="Save"
            // onClick={}
          />
          <RequestButton
            text="Request"
            // onClick={}
          />
        </div>
      </div>
    </>
  );
};

export default SpeakerPrimaryInformation;
