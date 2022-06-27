import SpeakerInfo from '../../Components/SpeakerProfileInfo/SpeakerProfileInfo';
import { RequestButton, SaveButton } from '../../Components/SubmitButton/SubmitButton';

const SpeakerPrimaryInformation = props => {


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
}

export default SpeakerPrimaryInformation;