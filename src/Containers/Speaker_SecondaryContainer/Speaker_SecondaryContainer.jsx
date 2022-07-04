import { useNavigate } from 'react-router-dom';
import { RequestButton, SaveButton } from '../../Components/Buttons/Buttons';
import SpeakerAboutMe from '../../Components/SpeakerAboutMe/SpeakerAboutMe';
import SpeakerCertifications from '../../Components/SpeakersCertifications/SpeakerCertifications';
import SpeakerSkills from '../../Components/SpeakerSkills/SpeakerSkills';
import SpeakerReviews from '../../Components/SpeakersReviews/SpeakerReviews';

const SpeakerSecondaryInformation = (props) => {
  const navigate = useNavigate();
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
        <div className="RequestButtonContainer">
          <RequestButton
            text="Request"
            onClick={() => navigate('/speakers/' + props.speaker.id +'/request')}
          />
        </div>
      </div>
    </>
  );
};

export default SpeakerSecondaryInformation;
