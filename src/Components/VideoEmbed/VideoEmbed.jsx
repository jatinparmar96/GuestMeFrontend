
const VideoEmbed = (props) => {
  const getVideoID = (url) => {
    return url.split("v=")[1].substring(0,11)
  }

  const videoID = getVideoID(props.video);

  return (

    <>
      <div className='video'>
        <iframe
          width="402"
          height="226"
          src={`https://www.youtube.com/embed/${videoID}`}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer;
                 clipboard-write;
                 encrypted-media;
                 gyroscope;
                 picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>


      </>
    );
}

export default VideoEmbed;