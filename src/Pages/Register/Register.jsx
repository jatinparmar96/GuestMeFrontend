// @ts-check
import React, { useState } from 'react';

import RegistrationImage from '../../assets/registration_speaker.png';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import { OrganizationRegisterContainer } from '../../Containers/Registers/OrganizationRegisterContainer/OrganizationRegisterContainer';
import { SpeakerRegisterContainer } from '../../Containers/Registers/SpeakerRegisterContainer/SpeakerRegisterContainer';

import style from './Register.module.scss';

/**@type {React.FC<any>} */
export const Register = (props) => {
  const [isSpeaker, setIsSpeaker] = useState(true);

  const registerContainer = isSpeaker ? (
    <SpeakerRegisterContainer />
  ) : (
    <OrganizationRegisterContainer />
  );

  return (
    <>
      <PageHeading text="Register" />
      <BreadCrumbs currentPosition="Register" />
      <div className={style.contentContainer}>
        <div className={style.radioContainer}>
          <div
            className={`${style.radio} ${isSpeaker ? style.radioSelected : ''}`}
          >
            <input
              type="radio"
              name="role"
              id="role-speaker"
              defaultChecked={isSpeaker}
              onClick={() => setIsSpeaker(true)}
            />
            <label htmlFor="role-speaker" className={style.desktopLabel}>
              I am a speaker
            </label>
            <label htmlFor="role-speaker" className={style.mobileLabel}>
              speaker
            </label>
          </div>
          <div
            className={`${style.radio} ${isSpeaker ? '' : style.radioSelected}`}
          >
            <input
              type="radio"
              name="role"
              id="role-organization"
              onClick={() => setIsSpeaker(false)}
            />
            <label htmlFor="role-speaker" className={style.desktopLabel}>
              I am an organization
            </label>
            <label htmlFor="role-speaker" className={style.mobileLabel}>
              Organization
            </label>
          </div>
        </div>
        {registerContainer}
        <div className={style.imageContainer}>
          <img src={RegistrationImage} alt="speaker" className={style.image} />
        </div>
      </div>
    </>
  );
};
