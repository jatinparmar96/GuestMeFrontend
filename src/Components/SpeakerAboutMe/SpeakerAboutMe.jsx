import style from './SpeakerAboutMe.module.scss';

const SpeakerAboutMe = (props) => {

    return (
      <>
        <div>
          <section className={style.profileAbout}>
            <p>{props.speaker.about}</p>
          </section>

        </div>


        </>

    );
}

export default SpeakerAboutMe;