// import { useState } from 'react';
import OrganizationCalendar from '../../Components/calendar/organization/organization-calendar';
import RequestForm from '../../Components/RequestForm/RequestForm';
import { addDays } from '../../Utils/Utils';
import style from './BookRequest.module.scss';

const BookRequest = (props) => {
  // const [date, setDate] = useState('');
  const today = new Date();
  return (
    <>
      <div className="calendarContainer">
        <h4>Select the date</h4>
        <div className={style.reference}>
          <div className={style.available}></div> <span>Available</span>
          <div className={style.notAvailable}></div>
          <span>Not Available</span>
          <div className={style.bookedByYou}></div>
          <span>Booked by you</span>
        </div>

        <OrganizationCalendar
          value={[today, addDays(today, 3), addDays(today, 5)]}
        />
        <RequestForm speaker={props.speaker} />
      </div>
    </>
  );
};

export default BookRequest;
