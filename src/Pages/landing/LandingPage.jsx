import classImage from '../../assets/pexels-pavel-danilyuk-8423049 5.png';
import Benefit from '../../Components/landing-page/benefit/Benefit';

import FeaturedSpeakers from '../../Components/landing-page/featured-speakers/FeaturedSpeakers';
import style from './LandingPage.module.scss';

import footerImage1 from '../../assets/landing-page-footer-1.png';
import footerImage2 from '../../assets/landing-page-footer-2.png';
import footerImage3 from '../../assets/landing-page-footer-3.png';
import Speeches from '../../Components/landing-page/speeches/Speeches';

const LandingPage = () => {
  return (
    <div className={style.landingPageContainer}>
      <div className={style.topContainer}>
        <div className={style.textContainer}>
          <h1>
            <span>Guest Me </span>
            <br />
            for Students
          </h1>
          <div className={style.infoContainer}>
            <p>
              Find guest speakers who are right for your school and your
              students based on speaking topics, budget, location, and
              experience.
            </p>
            <button className={style.primaryButton}>Find a Speaker</button>
          </div>
        </div>
        <div className={style.imageContainer}>
          <img className={style.heroImage} src={classImage} alt="banner"></img>
        </div>
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
          <Benefit />
        </div>
        <button className={style.primaryButton}>How it Works</button>
      </div>
      <div className={style.speechesContainer}>
        <Speeches />
      </div>

      <div className={style.featuredSpeakersContainer}>
        <h2>
          Featured <span>Speakers</span>
        </h2>
        <FeaturedSpeakers />

        <button className={style.primaryButton}>Find a Speaker</button>
      </div>

      <div className={style.footerContainer}>
        <div className={style.footerImageContainer}>
          <img
            className={style.footerImage2}
            src={footerImage2}
            alt="footer-2"
          />
          <img
            className={style.footerImage1}
            src={footerImage1}
            alt="footer-1"
          />

          <img
            className={style.footerImage3}
            src={footerImage3}
            alt="footer-3"
          />
        </div>
        <div className={style.footerMainContent}>
          <div className={style.signUpContainer}>
            <h2>
              Are you <span>looking for a speaker?</span>
            </h2>
            <p>
              Register now and get the opportunity to book speakers for various
              educational events!
            </p>
            <button className={style.primaryButton}>
              Register as an Organization
            </button>
          </div>

          <div className={style.signUpContainer}>
            <h2>
              Do you <span>want to become a speaker?</span>
            </h2>
            <p>
              Join our platform to connect with thousands of students who would
              like to hear about industry experts like you!
            </p>
            <button className={style.primaryButton}>
              Register as a Speaker
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
