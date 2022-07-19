import style from './SpeakerSkills.module.scss';

const SpeakerSkills = (props) => {

    return (
      <>
        <div>
          <section className={style.profileSkills}>
            <h4>Skills</h4>
            <div className={style.skills}>
            {props.speaker.skills
              .map((skill, index) =>
                <span key={index}>{skill}</span>
              )}
            </div>
          </section>

        </div>
        </>
    );
}

export default SpeakerSkills;