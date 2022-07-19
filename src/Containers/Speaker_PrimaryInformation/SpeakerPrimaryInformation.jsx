import { useNavigate } from 'react-router-dom';
import { RequestButtonMobile, SaveButtonMobile } from '../../Components/Buttons/Buttons';
import ScreenWidth from '../../Components/ScreenSize/ScreenSize';
import SpeakerInfo from '../../Components/SpeakerProfileInfo/SpeakerProfileInfo';
import style from './SpeakerPrimaryInformation.module.scss';


const SpeakerPrimaryInformation = (props) => {
  const navigate = useNavigate();
  const width = ScreenWidth();

  return (
    <>

      <div className={style.primary}>
        <SpeakerInfo speaker={props.speaker} />
        {width > 992 ?
          null
          :
          (<div className={style.buttonsContainer}>


            <SaveButtonMobile
              text="Save"
            // onClick={}
            />
            <RequestButtonMobile
              text="Request"
              onClick={() => navigate('/speakers/' + props.speaker.id + '/request')}
            />
          </div>)}
      </div>
    </>
  );
};

export default SpeakerPrimaryInformation;
