const SpeakerSkills = (props) => {

    return (
      <>
        <div>
          <section className='profileSkills'>
            <h4>Skills</h4>
            {props.speaker.conditions.interests
              .map((skill, index) =>
                <span key={index}>{skill}</span>
            )}
          </section>

        </div>
        </>
    );
}

export default SpeakerSkills;