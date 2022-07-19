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
        <div className={style.maxContent}>
          <div className={style.radioContainer}>
            <div
              className={`${style.radio} ${
                isSpeaker ? style.radioSelected : ''
              }`}
              onClick={() => setIsSpeaker(true)}
            >
              <input
                type="radio"
                name="role"
                id="role-speaker"
                defaultChecked={isSpeaker}
                checked={isSpeaker}
                className={style.radioInput}
              />
              <span className={style.radioButton}></span>
              <label className={style.desktopLabel}>I am a speaker</label>
              <label htmlFor="role-speaker" className={style.mobileLabel}>
                Speaker
              </label>
            </div>
            <div
              className={`${style.radio} ${
                isSpeaker ? '' : style.radioSelected
              }`}
              onClick={() => setIsSpeaker(false)}
            >
              <input
                type="radio"
                name="role"
                id="role-organization"
                checked={!isSpeaker}
                className={style.radioInput}
              />
              <span className={style.radioButton}></span>
              <label className={style.desktopLabel}>I am an organization</label>
              <label htmlFor="role-organization" className={style.mobileLabel}>
                Organization
              </label>
            </div>
          </div>
          {registerContainer}
          <div className={style.imageContainer}>
            <img
              src={RegistrationImage}
              alt="speaker"
              className={style.image}
            />
          </div>
        </div>
      </div>
    </>
  );
};
