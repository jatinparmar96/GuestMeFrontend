import { useNavigate } from 'react-router-dom';
import { RequestButton, SaveButton } from '../../Components/Buttons/Buttons';
import SpeakerInfo from '../../Components/SpeakerProfileInfo/SpeakerProfileInfo';


const SpeakerPrimaryInformation = (props) => {
  const navigate = useNavigate();

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
            onClick={() => navigate('/speakers/' + props.speaker.id +'/request')}
          />
        </div>
      </div>
    </>
  );
};

export default SpeakerPrimaryInformation;
