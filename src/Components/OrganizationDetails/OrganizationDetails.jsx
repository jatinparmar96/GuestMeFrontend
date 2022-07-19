import { ReactComponent as CrossMark } from '../../assets/icons/cross.svg';
import style from './OrganizationDetails.module.scss';
const OrganizationDetails = ({ booking }) => {
  // console.log(booking);
  return (
    <>
      <div className={style.organizationDetails}>
        <p>
          <span className={style.email}>
            <span>Email </span>
            <span
              // onClick={() => props.organizationData}
              className={style.crossMark}
            >
              <CrossMark />
            </span>
          </span>
          <span className={style.organizationEmail}>
            {booking.organization.organizationEmail}
          </span>
        </p>

        <p>
          <span>Phone</span> {booking.organization.organizationPhone}
        </p>
        <p>
          <span> Time</span> {booking.bookingDateTime.startDateTime} -{' '}
          {booking.bookingDateTime.endDateTime}
        </p>
        <p>
          <span>Speech topic</span> {booking.topic}
        </p>
        <p>
          <span>Person in Charge </span>
          {booking.personInCharge}
        </p>
        <p>
          <span>Message</span> {booking.message}
        </p>

        {/* <form>
           <label for="email">Email</label>
          <input type="text" name="email">
            {booking.organization.organizationEmail}
          </input>
          <label for="phone">Phone</label>
          <input type="text" name="phone">
            {booking.organization.organizationPhone}
          </input>
          <label for="time">Time</label>
          <input type="text" name="time">
            {booking.bookingDateTime.startDateTime} -{' '}
            {booking.bookingDateTime.endDateTime}
          </input>
          <label for="speechTopic">Speech Topic</label>
          <input type="text" name="speechTopic">
            {booking.topic}
          </input>
          <label for="personInCharge">Person In Charge</label>
          <input type="text" name="personInCharge">
            {booking.personInCharge}
          </input>
          <label for="message">Message</label>
          <textarea type="text" name="message">
            {booking.message}
          </textarea>  </form> */}
      </div>
    </>
  );
};

export default OrganizationDetails;
