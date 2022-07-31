import style from './VideoEmbed.module.scss';

const VideoEmbed = (props) => {
  const getVideoID = (url) => {
    return url.split('v=')[1]?.substring(0, 11);
  };

  const videoID = getVideoID(props.video);

  return (
    <>
      <div className={style.videoContainer}>
        <iframe
          // width="402"
          // height="226"
          className={style.video}
          src={`https://www.youtube.com/embed/${videoID}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;
                 clipboard-write;
                 encrypted-media;
                 gyroscope;
                 picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </>
  );
};

export default VideoEmbed;
