import style from './OrganizationDetails.module.scss';

import { ReactComponent as CrossMark } from '../../assets/icons/cross.svg';

const OrganizationDetails = ({ booking, organizationData, id }) => {
  console.log(booking);

  const crossMark = () => {
    organizationData(id);
  };

  return (
    <>
      <div className={style.organizationDetails}>
        <div onClick={() => crossMark()} className={style.crossMark}>
          <CrossMark />
        </div>
        <div className={style.organizationComponent}>
          <div>
            <div className={style.emailAndCross}>
              <p>
                <span className={style.email}>
                  <span>Email </span>
                </span>
                <span className={style.organizationEmail}>
                  {booking.organization.id?.contact?.email}
                </span>
              </p>
            </div>
            <p>
              <span>Phone</span> {booking.organization.id?.contact?.phone}
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
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationDetails;
