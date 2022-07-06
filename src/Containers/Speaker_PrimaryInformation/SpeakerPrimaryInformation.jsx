import { useNavigate } from 'react-router-dom';
import { RequestButton, SaveButton } from '../../components/buttons/Buttons';
import SpeakerInfo from '../../components/speakerProfileInfo/SpeakerProfileInfo';


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
