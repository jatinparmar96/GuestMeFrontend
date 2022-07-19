import { useState } from 'react';
import RegistrationImage from '../../assets/registration_speaker.png';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import { OrganizationLoginForm } from '../../Components/LoginForms/OrganizationLoginForm/OrganizationLoginForm';
import { SpeakerLoginForm } from '../../Components/LoginForms/SpeakerLoginForm/SpeakerLoginForm';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import style from './Login.module.scss';

export const Login = (props) => {
  /**@type {[boolean, React.Dispatch<boolean>]} */
  const [isSpeaker, setIsSpeaker] = useState(props.type !== 'organization');

  const container = isSpeaker ? (
    <SpeakerLoginForm />
  ) : (
    <OrganizationLoginForm />
  );

  return (
    <div className={style.backgroundContainer}>
      <PageHeading
        text={`Log in as ${isSpeaker ? 'a speaker' : ' an organization'}`}
      />
      <BreadCrumbs currentPosition="How it works" />
      <div className={style.PageContainer}>
        <div className={style.contentContainer}>
          <div className={style.boxContainer}>
            <div className={style.radioContainer}>
              <div>
                <input
                  type="radio"
                  name="role"
                  id="role-speaker"
                  checked={isSpeaker}
                  onClick={() => setIsSpeaker(true)}
                />
                <label htmlFor="role-speaker">Speaker</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="role"
                  id="role-organization"
                  checked={!isSpeaker}
                  onClick={() => setIsSpeaker(false)}
                />
                <label htmlFor="role-organization">Organization</label>
              </div>
            </div>
            <div className={style.divideContainer}>
              <div className={style.formContentContainer}>{container}</div>
              <div className={style.imageContainer}>
                <img
                  src={RegistrationImage}
                  alt="Login"
                  className={style.image}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
