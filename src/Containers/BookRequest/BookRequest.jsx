import RequestForm from '../../Components/RequestForm/RequestForm';
import style from './BookRequest.module.scss';

const BookRequest = (props) => {
  return (
    <>
      <div className={style.requestContainer}>
        <h2>Select the date</h2>
        <div className={style.reference}>
          <div className={style.available}></div> <span className={style.referenceName}>Available</span>
          <div className={style.notAvailable}></div>
          <span className={style.referenceName}>Not Available</span>
          <div className={style.bookedByYou}></div>
          <span className={style.referenceName}>Booked by you</span>
        </div>

        <RequestForm speaker={props.speaker} />
      </div>
    </>
  );
};

export default BookRequest;
