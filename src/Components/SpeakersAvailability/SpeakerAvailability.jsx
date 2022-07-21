import OrganizationCalendar from '../calendar/organization/organization-calendar';
import style from './SpeakerAvailability.module.scss';

const SpeakerAvailability = (props) => {
  return (
    <>
      <div className={style.organizationCalendar}>
        <OrganizationCalendar
          className={style.calendar}
          value={props.value}
          availability={true}
        />
      </div>
    </>
  );
};

export default SpeakerAvailability;
