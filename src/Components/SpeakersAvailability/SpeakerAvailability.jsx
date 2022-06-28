import { addDays } from '../../Utils/Utils';
import OrganizationCalendar from '../calendar/organization/organization-calendar';

const SpeakerAvailability = (props) => {
  const today = new Date();
  return (
    <>
      <div className="calendarContainer">
        <h4>Availability</h4>

        <OrganizationCalendar
          value={[today, addDays(today, 3), addDays(today, 5)]}
        />
      </div>
    </>
  );
};

export default SpeakerAvailability;
