import SpeakerAboutMe from '../../Components/SpeakerAboutMe/SpeakerAboutMe';
import SpeakerCertifications from '../../Components/SpeakersCertifications/SpeakerCertifications';
import SpeakerSkills from '../../Components/SpeakerSkills/SpeakerSkills';
import SpeakerReviews from '../../Components/SpeakersReviews/SpeakerReviews';
import { RequestButton, SaveButton } from '../../Components/SubmitButton/SubmitButton';

const SpeakerSecondaryInformation = props => {


  return (
    <>
      <div>
        <SpeakerAboutMe speaker={props.speaker} />
        <SpeakerSkills speaker={props.speaker} />
        <SpeakerCertifications speaker={props.speaker} />
         <SpeakerReviews speaker={props.speaker} />
        <div className="SaveButtonContainer">
          <SaveButton
            text="Save"
            // onClick={}
          />
        </div>
        <div className='RequestButtonContainer'>
          <RequestButton
            text="Request"
            // onClick={}
          />
        </div>
      </div>
    </>
  );
}

export default SpeakerSecondaryInformation;