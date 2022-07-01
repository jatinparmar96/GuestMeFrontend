import { useState } from 'react';
import OrganizationCalendar from '../../Components/calendar/organization/organization-calendar';
import SpeakerCalendar from '../../Components/calendar/speaker/speaker-calendar';
import { OrganizationLoginForm } from '../../Components/OrganizationLoginForm/OrganizationLoginForm';
import { SpeakerLoginForm } from '../../Components/SpeakerLoginForm/SpeakerLoginForm';
import { addDays } from '../../Utils/Utils';

// !Remove after test
const today = new Date();

export const Login = (props) => {
  /**@type {[boolean, React.Dispatch<boolean>]} */
  const [isSpeaker, setIsSpeaker] = useState(props.type !== 'organization');

  const container = isSpeaker ? (
    <SpeakerLoginForm />
  ) : (
    <OrganizationLoginForm />
  );

  return (
    <div>
      <div>
        <input
          type="radio"
          name="role"
          id="role-speaker"
          defaultChecked={isSpeaker}
          onClick={() => setIsSpeaker(true)}
        />
        <label htmlFor="role-speaker">Speaker</label>
      </div>
      <div>
        <input
          type="radio"
          name="role"
          id="role-organization"
          onClick={() => setIsSpeaker(false)}
        />
        <label htmlFor="role-organization">Organization</label>
      </div>
      {container}
      <SpeakerCalendar />

      <OrganizationCalendar
        value={[today, addDays(today, 3), addDays(today, 5)]}
      />
    </div>
  );
};
