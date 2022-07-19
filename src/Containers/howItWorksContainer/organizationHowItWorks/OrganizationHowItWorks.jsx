//@ts-check
import React from 'react';
import { Link } from 'react-router-dom';

import AppealPointItem from '../components/AppealPointItem';

import { ReactComponent as Availability } from '../../../assets/icons/availability.svg';
import { ReactComponent as Camera } from '../../../assets/icons/camera.svg';
import { ReactComponent as Inspect } from '../../../assets/icons/inspect.svg';
import { ReactComponent as TwoPeople2 } from '../../../assets/icons/two-people2.svg';
import organizationImage from '../../../assets/organization-howItWorks.png';

import containerStyle from '../HowItWorks.module.scss';
import componentStyle from './OrganizationHowItWorks.module.scss';

import { RegisterLinkButton } from '../../../Components/Buttons/Buttons';

const OrganizationHowItWorks = () => {
  return (
    <div className={containerStyle.container}>
      <div className={containerStyle.whyGuestMe}>
        <h3>
          Why <span className={containerStyle.fontMint}>GUEST ME?</span>
        </h3>
        <div>
          <p>
            We guarantee your satisfaction with your speaker and a precious
            learning opportunity for your students.
          </p>
          <p></p>
          There are distinct advantages to using GUEST ME to assist in the
          speaker selection and booking process, including:
        </div>
      </div>
      <div className={containerStyle.appealPointContainer}>
        {appealPoints.map((appealPoint, index) => (
          <AppealPointItem {...appealPoint} key={index} />
        ))}
      </div>
      <div>
        <div className={componentStyle.compositeContainer}>
          <div
            className={`${componentStyle.compositeImage} ${containerStyle.imageContainer}`}
          >
            <img
              src={organizationImage}
              alt="img"
              className={containerStyle.image}
            />
          </div>
          <div className={componentStyle.compositeBackground}></div>
          <div className={componentStyle.compositeDescription}>
            {descriptions.map((description, index) => (
              <React.Fragment key={index}>
                <h4 className={componentStyle.compositeHeading}>
                  {description.heading}
                </h4>
                <p className={componentStyle.compositeDescription__p}>
                  {description.text}
                </p>
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className={containerStyle.areYouJoin}>
          <h4 className={componentStyle.compositeHeading}>
            Are you ready to join
            <span className={containerStyle.fontMint}>as an organization?</span>
          </h4>
          <p>
            Register to choose a perfect speaker for your event from a wide
            roster of professionals! Bring that extra energy your audience
            needs!
          </p>
          <span>
            <RegisterLinkButton
              text="Register as an organization"
              to="/register"
            />
          </span>
          <p>Already have an account?</p>
          <Link to="/login" className={containerStyle.loginLink}>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrganizationHowItWorks;

/**
 * @typedef {Object} AppealPointItem
 * @property {React.FunctionComponent<React.SVGProps<SVGSVGElement>>} icon
 * @property {string} text
 */

/**
 * @typedef {Object} Description
 * @property {string} heading
 * @property {string} text
 */

/*************************************
 * Content
 *************************************/

/**@type {AppealPointItem[]} */
const appealPoints = [
  {
    icon: TwoPeople2,
    text: 'Welcome a variety of speakers from professional to amateur',
  },
  {
    icon: Inspect,
    text: 'Browse and compare speakers depending on the topic and budget',
  },
  {
    icon: Availability,
    text: "Check speaker's availability in their calendar and instantly message them",
  },
  {
    icon: Camera,
    text: 'No commission or transaction fees charged',
  },
];

/**@type {Description[]} */
const descriptions = [
  {
    heading: 'Easily browse and compare speakers',
    text: 'We provide a range of public speakers with complete information about their credentials, area of expertise, and speaking fees so that organizers can search and contrast speakers.',
  },
  {
    heading: 'Book or save a speaker',
    text: 'We provide a range of public speakers with complete information about their credentials, area of expertise, and speaking fees so that organizers can search and contrast speakers.',
  },
  {
    heading: 'Stay up to date',
    text: 'GuestMe helps organizers keep in touch with speakers by giving updates on their most recent activity, such as request acceptance or denial, and other helpful alerts.',
  },
  {
    heading: 'Post-review comments',
    text: 'After receiving a speech from the speakers your given feedback will be beneficial for speakers as well as for organizations to get reorganization or to find a speaker in less time, respectively.',
  },
];
