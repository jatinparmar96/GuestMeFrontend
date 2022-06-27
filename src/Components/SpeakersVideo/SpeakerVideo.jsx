import VideoEmbed from '../VideoEmbed/VideoEmbed';
const SpeakerVideo = (props) => {


  return (

    <>
      <div className='videoContainer'>
        <h4>Video</h4>
        <VideoEmbed video={ props.speaker.conditions.videos} />

      </div>


      </>
    );
}

export default SpeakerVideo;