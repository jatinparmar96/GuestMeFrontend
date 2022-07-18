import { useNavigate } from 'react-router-dom';
import { RequestButton, SaveButton } from '../../Components/Buttons/Buttons';
import SpeakerAboutMe from '../../Components/SpeakerAboutMe/SpeakerAboutMe';
import SpeakerCertifications from '../../Components/SpeakersCertifications/SpeakerCertifications';
import SpeakerSkills from '../../Components/SpeakerSkills/SpeakerSkills';
import SpeakerReviews from '../../Components/SpeakersReviews/SpeakerReviews';
import style from './SpeakerSecondaryContainer.module.scss';

const SpeakerSecondaryInformation = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <div className={style.secondary}>
        <div className={style.about}>
          <h4>About me</h4>
          <SpeakerAboutMe speaker={props.speaker} />
        </div>
        <div className={style.skills}>
          <SpeakerSkills speaker={props.speaker} />
        </div>
        <div className={style.certifications}>
          <SpeakerCertifications speaker={props.speaker} />
        </div>
        <div className={style.reviews}>
          <SpeakerReviews speaker={props.speaker} />
        </div>
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
