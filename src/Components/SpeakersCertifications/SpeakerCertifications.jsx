const SpeakerCertifications = (props) => {

    return (
      <>
        <div>
          <section className='profileCertifications'>
            <h4>Certifications</h4>
            <p>{props.speaker.conditions.certifications.join(", ")}</p>
          </section>
        </div>
        </>
    );
}

export default SpeakerCertifications;