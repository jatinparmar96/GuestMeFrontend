import OrganizationCalendar from '../../Components/calendar/organization/organization-calendar';
import SpeakerCalendar from '../../Components/calendar/speaker/speaker-calendar';
import { OrganizationLoginForm } from '../../Components/OrganizationLoginForm/OrganizationLoginForm';
import { SpeakerLoginForm } from '../../Components/SpeakerLoginForm/SpeakerLoginForm';
import { addDays } from '../../Utils/Utils';

const today = new Date();
export const Login = (props) => {
  const container =
    props.type !== 'organization' ? (
      <SpeakerLoginForm></SpeakerLoginForm>
    ) : (
      <OrganizationLoginForm></OrganizationLoginForm>
    );

  return (
    <div>
      {container}
      <SpeakerCalendar />

      <OrganizationCalendar
        value={[today, addDays(today, 3), addDays(today, 5)]}
      />
    </div>
  );
};
