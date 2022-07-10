import { ReactComponent as BenefitLogo1 } from '../../assets/icons/benefit-icon-1.svg';
import { ReactComponent as BenefitLogo2 } from '../../assets/icons/benefit-icon-2.svg';
import { ReactComponent as BenefitLogo3 } from '../../assets/icons/benefit-icon-3.svg';
import { ReactComponent as BenefitLogo4 } from '../../assets/icons/benefit-icon-4.svg';
import classImage from '../../assets/pexels-pavel-danilyuk-8423049 5.png';
import style from './LandingPage.module.scss';

const benefitsLogos = [
  {
    logo: <BenefitLogo1 />,
    text: 'Welcome a variety of speakers from professional to amateur',
  },
  {
    logo: <BenefitLogo2 />,
    text: 'Browse and compare speakers depending on the topic and budget',
  },
  {
    logo: <BenefitLogo3 />,
    text: "Check speaker's availability in their calendar and instantly message them",
  },
  {
    logo: <BenefitLogo4 />,
    text: 'No commission or transaction fees charged',
  },
];

const LandingPage = () => {
  return (
    <div className={style.landingPageContainer}>
      <div className={style.topContainer}>
        <div className={style.textContainer}>
          <h1>
            <span>Guest Me</span>
            <br />
            for Students
          </h1>
          <div className={style.infoContainer}>
            <p>
              Find guest speakers who are right for your school and your
              students based on speaking topics, budget, location, and
              experience.{' '}
            </p>
            <button className={style.button}>Find a Speaker</button>
          </div>
        </div>

        <img className={style.heroImage} src={classImage} alt="banner"></img>
      </div>

      <div className={style.middleContainer}>
        {/* <img src={ladyImage} alt="lady with laptop"></img> */}
        <div className={style.infoTextContainer}>
          <h2>
            Why <span>Guest Me?</span>
          </h2>
          <p>
            We guarantee your satisfaction with your speaker and a precious
            learning opportunity for your students. There are distinct
            advantages to using GUEST ME to assist in the speaker selection and
            booking process, including:
          </p>
        </div>
        <div className={style.benefits}>
          {benefitsLogos.map((benefit, index) => (
            <div key={index} className={style.benefitContainer}>
              <div className={style.benefitLogo}>{benefit.logo}</div>
              <p className={style.benefitText}>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
