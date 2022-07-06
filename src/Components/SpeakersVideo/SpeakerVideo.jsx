import VideoEmbed from '../videoEmbed/VideoEmbed';
const SpeakerVideo = (props) => {


  return (

    <>
      <div className='videoContainer'>
        <h4>Video</h4>
        <VideoEmbed video={ props.video} />

      </div>


      </>
    );
}

export default SpeakerVideo;