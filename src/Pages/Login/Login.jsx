import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import RegistrationImage from '../../assets/registration_speaker.png';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import { OrganizationLoginForm } from '../../Components/LoginForms/OrganizationLoginForm/OrganizationLoginForm';
import { SpeakerLoginForm } from '../../Components/LoginForms/SpeakerLoginForm/SpeakerLoginForm';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import style from './Login.module.scss';

export const Login = () => {
  /**@type {[boolean, React.Dispatch<boolean>]} */

  const location = useLocation();

  const [isSpeaker, setIsSpeaker] = useState(true);

  useEffect(() => {
    if (location.state?.userType) {
      setIsSpeaker(location.state?.userType === 'speaker');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
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
              <div className={style.radio}>
                <input
                  type="radio"
                  name="role"
                  id="role-speaker"
                  checked={isSpeaker}
                  onClick={() => setIsSpeaker(true)}
                />
                <label htmlFor="role-speaker" className={style.radioLabel}>
                  Speaker
                </label>
              </div>
              <div className={style.radio}>
                <input
                  type="radio"
                  name="role"
                  id="role-organization"
                  checked={!isSpeaker}
                  onClick={() => setIsSpeaker(false)}
                />
                <label htmlFor="role-organization" className={style.radioLabel}>
                  Organization
                </label>
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
