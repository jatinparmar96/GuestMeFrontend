import { useState } from 'react';
import { OrganizationLoginForm } from '../../Components/LoginForms/OrganizationLoginForm/OrganizationLoginForm';
import { SpeakerLoginForm } from '../../Components/LoginForms/SpeakerLoginForm/SpeakerLoginForm';
import style from './Login.module.scss';
// !Remove after test
// const today = new Date();

export const Login = (props) => {
  /**@type {[boolean, React.Dispatch<boolean>]} */
  const [isSpeaker, setIsSpeaker] = useState(props.type !== 'organization');

  // let from = location.state?.from?.pathname || '/';
  // console.log(from);
  const container = isSpeaker ? (
    <SpeakerLoginForm />
  ) : (
    <OrganizationLoginForm />
  );

  return (
    <div className={style.PageContainer}>
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
      {container}
      {/* <SpeakerCalendar />
      <OrganizationCalendar
        value={[today, addDays(today, 3), addDays(today, 5)]}
      /> */}
    </div>
  );
};
