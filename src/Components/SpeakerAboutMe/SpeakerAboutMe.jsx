const SpeakerAboutMe = (props) => {

    return (
      <>
        <div>
          <section className='profileAboutMe'>
            <h4>About me</h4>
            <p>{props.speaker.about}</p>
          </section>

        </div>


        </>

    );
}

export default SpeakerAboutMe;