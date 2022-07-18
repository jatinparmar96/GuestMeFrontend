import style from './SpeakerCertifications.module.scss';
const SpeakerCertifications = (props) => {

    return (
      <>
        <div>
          <section className={style.profileCertifications}>
            <h4>Certifications</h4>
            <p>{props.speaker.certifications.join(", ")}</p>
          </section>
        </div>
        </>
    );
}

export default SpeakerCertifications;