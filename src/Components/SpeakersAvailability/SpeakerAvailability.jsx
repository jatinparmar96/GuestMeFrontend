import OrganizationCalendar from '../calendar/organization/organization-calendar';

const SpeakerAvailability = (props) => {
  return (
    <>
      <div className="calendarContainer">
        <h4>Availability</h4>
        {/* {TODO: Add Calendar} */}
        <OrganizationCalendar />
      </div>
    </>
  );
};

export default SpeakerAvailability;
