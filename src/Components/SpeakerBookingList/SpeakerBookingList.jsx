import { useEffect, useState } from 'react';
import { bookingResponse } from '../../Api/Booking.service';
import { ReactComponent as Approve } from '../../assets/icons/approve.svg';
import { ReactComponent as Cancel } from '../../assets/icons/cancel-delete.svg';
import { ReactComponent as Decline } from '../../assets/icons/decline.svg';
import { ReactComponent as DownArrow } from '../../assets/icons/down-arrow.svg';
import { ReactComponent as UpArrow } from '../../assets/icons/up-arrow.svg';
import { convertDateFormat } from '../../Utils/Utils';
import AlertDialog from '../ModalPopup/ModalPopup';
import OrganizationDetails from '../OrganizationDetails/OrganizationDetails';
import style from './SpeakerBookingList.module.scss';

const SpeakerBookingList = (props) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [buttonAction, setButtonAction] = useState('');
  const [booking, setBooking] = useState();
  const [bookingDataOrganization, setBookingDataOrganization] = useState([]);
  const [arrowForOrg, setArrowForOrg] = useState(true);

  const bookingStatus = (e, id) => {
    let data = {
      status: e,
    };
    const updatedBookingData = bookingResponse(data, id);
    props.setNewBookingData(updatedBookingData);
  };

  const openPopup = (response, bookingData) => {
    setPopupOpen(true);
    setButtonAction(response);
    setBooking(bookingData);
  };

  let arrowDecider = <></>;
  if (arrowForOrg) {
    arrowDecider = <UpArrow />;
  } else {
    arrowDecider = <DownArrow />;
  }

  const organizationData = (id) => {
    setArrowForOrg(!arrowForOrg);
    bookingDataOrganization[id] = !bookingDataOrganization[id];
    setBookingDataOrganization([...bookingDataOrganization]);
  };
  // console.log(count);

  useEffect(() => {
    const pendingLength = props.speaker.pending.length;
    let pendingArray = [];
    for (let i = 0; i < pendingLength; i++) {
      pendingArray.push(false);
    }
    // console.log(pendingArray);
    setBookingDataOrganization(pendingArray);
  }, [props.speaker.pending]);

  return (
    <>
      <AlertDialog
        open={popupOpen}
        buttonAction={buttonAction}
        bookingStatus={bookingStatus}
        booking={booking}
      />
      <div className={style.bookingInfo}>
        <div>
          <h2>Booking</h2>
          <h3>Waiting</h3>
          {props.speaker.pending && (
            <ul>
              {props.speaker.pending.map((booking, id) => (
                <li key={id}>
                  <div className={style.verticalGrid}>
                    <div className={style.forBorderDiv}>
                      <p className={style.mintBlueText}>Request for</p>
                      <p className={style.date}>
                        {convertDateFormat(booking.bookingDateTime.date)}
                      </p>
                    </div>

                    <div className={style.forBorderDivSecondSection}>
                      <div className={style.centreColumnTopRow}>
                        <p className={style.mintBlueText}>Request from</p>
                        <p className={style.sentAt}>
                          sent at {convertDateFormat(booking.createdAt)}
                        </p>
                      </div>

                      <p onClick={(e) => organizationData(id)}>
                        <span className={style.organizationName}>
                          {booking.organization.name}
                        </span>{' '}
                        {arrowDecider}
                      </p>

                      {bookingDataOrganization[id] ? (
                        <OrganizationDetails
                          booking={booking}
                          organizationData={organizationData}
                        />
                      ) : (
                        ''
                      )}
                    </div>

                    <div className={style.callToActionColumn}>
                      <p
                        className={style.approve}
                        onClick={() => openPopup('accepted', booking)}
                      >
                        <Approve />
                      </p>
                      <p
                        className={style.decline}
                        onClick={(e) => openPopup('rejected', booking)}
                      >
                        <Decline />
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div>
          <h3>Upcoming List</h3>

          {props.speaker.accepted && (
            <ul>
              {props.speaker.accepted.map((booking, id) => (
                <li key={id}>
                  {/* <p>{ booking.location}</p> */}
                  <div className={style.verticalGrid}>
                    <div className={style.forBorderDiv}>
                      <p className={style.mintBlueText}>Request for</p>
                      <p className={style.date}>
                        {convertDateFormat(booking.bookingDateTime.date)}
                      </p>
                    </div>

                    <div className={style.forBorderDivSecondSection}>
                      <div className={style.centreColumnTopRow}>
                        <p className={style.mintBlueText}>Request from</p>
                        <p className={style.sentAt}>
                          sent at {convertDateFormat(booking.createdAt)}
                        </p>
                      </div>
                      <p onClick={(e) => organizationData(id)}>
                        <span className={style.organizationName}>
                          {booking.organization.name}
                        </span>{' '}
                        {arrowDecider}
                      </p>
                    </div>

                    <div
                      className={`${style.callToActionColumn} ${style.cancel}`}
                    >
                      <Cancel />
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <h3>History List</h3>

          {props.speaker.accepted && (
            <ul>
              {props.speaker.accepted.map((booking, id) => (
                <li key={id}>
                  {/* <p>{ booking.location}</p> */}
                  <div className={style.verticalGrid}>
                    <div className={style.forBorderDiv}>
                      <p className={style.mintBlueText}>Request for</p>
                      <p className={style.date}>
                        {convertDateFormat(booking.bookingDateTime.date)}
                      </p>
                    </div>

                    <div>
                      <div className={style.centreColumnTopRow}>
                        <p className={style.mintBlueText}>Request from</p>
                        <p className={style.sentAt}>
                          sent at {convertDateFormat(booking.createdAt)}
                        </p>
                      </div>
                      <p onClick={(e) => organizationData(id)}>
                        <span className={style.organizationName}>
                          {booking.organization.name}
                        </span>{' '}
                        {arrowDecider}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default SpeakerBookingList;
