//@ts-check
import React from 'react';
import { Link } from 'react-router-dom';

import AppealPointItem from '../components/AppealPointItem';

import { ReactComponent as Diamond } from '../../../assets/icons/diamond.svg';
import { ReactComponent as Negotiate } from '../../../assets/icons/negotiate.svg';
import { ReactComponent as Pencil } from '../../../assets/icons/pencil.svg';
import { ReactComponent as TwoPeople } from '../../../assets/icons/two-people.svg';
import speakerImage from '../../../assets/speaker-howItWorks.png';

import containerStyle from '../HowItWorks.module.scss';
import componentStyle from './SpeakerHowItWorks.module.scss';

import { RegisterLinkButton } from '../../../Components/Buttons/Buttons';
/**@type {AppealPointItem[]} */
const appealPoints = [
  {
    icon: Diamond,
    text: 'Get recognition, review, and build your career',
  },
  {
    icon: TwoPeople,
    text: 'Make connections with organizations without paying any commission',
  },
  {
    icon: Pencil,
    text: 'Add movies and your skills to your profile page to highlight your work',
  },
  {
    icon: Negotiate,
    text: 'Negotiate for fee and earn satisfactory amount',
  },
];

const SpeakerHowItWorks = () => {
  return (
    <div className={containerStyle.container}>
      <div className={containerStyle.whyGuestMe}>
        <h3>
          Why <span className={containerStyle.fontMint}>GUEST ME?</span>
        </h3>
        <div>
          GUEST ME is for professional, independent, or amateur public speakers
          who'd like to be found by educational institutions. We welcome anyone
          with expertise in any field who is open to speaking at schools to give
          youth a precious opportunity and learning.
        </div>
      </div>
      <div className={containerStyle.appealPointContainer}>
        {appealPoints.map((appealPoint) => (
          <AppealPointItem {...appealPoint} />
        ))}
      </div>
      <div>
        <div className={containerStyle.compositeContainer}>
          <div
            className={`${componentStyle.compositeImage} ${containerStyle.imageContainer}`}
          >
            <img
              src={speakerImage}
              alt="img"
              className={`${containerStyle.image} ${componentStyle.image}`}
            />
          </div>
          <div
            className={`${componentStyle.compositeBackground} ${containerStyle.compositeBackground}`}
          ></div>
          <div
            className={`${componentStyle.compositeDescription} ${containerStyle.compositeDescription}`}
          >
            <h4 className={containerStyle.compositeHeading}>Create Profile</h4>
            <p className={containerStyle.compositeDescription__p}>
              It is remarkably simple and easy to create a profile, just add
              your name, field of expertise and delivery method to get started
              with booking new clients. GuestMe has no fees to create a profile
              for a speaker.
            </p>
            <h4 className={containerStyle.compositeHeading}>
              Add Your Schedule
            </h4>
            <p className={containerStyle.compositeDescription__p}>
              Add your Schedule and availabilities to your profile to
              personalize. Guest Me offers ultimate flexibility to Speakers just
              getting started. Clients will only be able to book you at the time
              you specify.
            </p>
            <h4 className={containerStyle.compositeHeading}>
              Accept a Booking
            </h4>
            <p className={containerStyle.compositeDescription__p}>
              Whenever you receive a booking, you will be notified instantly,
              you can choose to accept or reject the booking.
            </p>
            <h4 className={containerStyle.compositeHeading}>
              Receive Feedback
            </h4>
            <p className={containerStyle.compositeDescription__p}>
              Receive feedback for the work you do, get recognized, earn
              recommendations. Stand out from the crowd, all while doing what
              you love to do.
            </p>
          </div>
        </div>

        <div className={containerStyle.areYouJoinASpeaker}>
          <h4 className={containerStyle.compositeHeading}>
            Are you ready to join{' '}
            <span className={containerStyle.fontMint}>as a speaker?</span>
          </h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
            eget pharetra sem, ut convallis ex.
          </p>
          <RegisterLinkButton text="Register as a speaker" to="/register" />
          <p>Already have an account?</p>
          <Link to="/login" className={containerStyle.loginLink}>
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SpeakerHowItWorks;

/**
 * @typedef {Object} AppealPointItem
 * @property {React.FunctionComponent<React.SVGProps<SVGSVGElement>>} icon
 * @property {string} text
 */
