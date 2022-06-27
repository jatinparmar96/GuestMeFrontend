import SpeakerVideo from '../../Components/SpeakersVideo/SpeakerVideo';

const SpeakerTertiaryInformation = props => {


  return (
    <>
      <div>
        <SpeakerVideo speaker={props.speaker} />
      </div>
    </>
  );
}

export default SpeakerTertiaryInformation;