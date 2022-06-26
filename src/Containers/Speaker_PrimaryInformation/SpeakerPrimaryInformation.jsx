import SpeakerInfo from '../../Components/SpeakerProfileInfo/SpeakerProfileInfo';

const SpeakerPrimaryInformation = props => {


  return (
    <>
      <div>
        <SpeakerInfo speaker={props.speaker}/>
      </div>
    </>
  );
}

export default SpeakerPrimaryInformation;