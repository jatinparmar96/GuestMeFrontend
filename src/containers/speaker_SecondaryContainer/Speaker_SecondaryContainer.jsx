import { useNavigate } from 'react-router-dom';
import { RequestButton, SaveButton } from '../../components/buttons/Buttons';
import SpeakerAboutMe from '../../components/speakerAboutMe/SpeakerAboutMe';
import SpeakerCertifications from '../../components/speakersCertifications/SpeakerCertifications';
import SpeakerSkills from '../../components/speakerSkills/SpeakerSkills';
import SpeakerReviews from '../../components/speakersReviews/SpeakerReviews';

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
