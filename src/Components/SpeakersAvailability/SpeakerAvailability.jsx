import OrganizationCalendar from '../calendar/organization/organization-calendar';

const SpeakerAvailability = (props) => {
  return (
    <>
      <div className="calendarContainer">
        <h4>Availability</h4>

        <OrganizationCalendar value={props.value} />
      </div>
    </>
  );
};

export default SpeakerAvailability;
