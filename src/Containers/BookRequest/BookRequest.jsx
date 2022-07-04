import RequestForm from '../../Components/RequestForm/RequestForm';
import style from './BookRequest.module.scss';

const BookRequest = (props) => {
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

        <RequestForm speaker={props.speaker} />
      </div>
    </>
  );
};

export default BookRequest;
