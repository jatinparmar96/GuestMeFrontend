import OrganizationCalendar from '../calendar/organization/organization-calendar';

const SpeakerAvailability = (props) => {
  return (
    <>
      <div className="calendarContainer">


        <OrganizationCalendar value={props.value} />
      </div>
    </>
  );
};

export default SpeakerAvailability;
