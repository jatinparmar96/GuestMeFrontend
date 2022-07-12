import { useState } from 'react';
import { bookingResponse } from '../../Api/Booking.service';
import { convertDateFormat } from '../../Utils/Utils';
import AlertDialog from '../ModalPopup/ModalPopup';
import style from './SpeakerBookingList.module.scss';

const SpeakerBookingList = (props) => {
  console.log(props.speaker);

  const [popupOpen, setPopupOpen] = useState(false);
  const [buttonAction, setButtonAction] = useState('');
  const [booking, setBooking] = useState();
  const bookingStatus = (e, id) => {
    // console.log(id)
    let data = {
      status: e,
    };
    bookingResponse(data, id);
  };

  const openPopup = (response, bookingData) => {
    setPopupOpen(true);
    setButtonAction(response);
    setBooking(bookingData);
    // console.log(popupOpen);
  };

  return (
    <>
      <div>
        <AlertDialog
          open={popupOpen}
          buttonAction={buttonAction}
          bookingStatus={bookingStatus}
          booking={booking}
        />
        <h3>Waiting List</h3>
        {props.speaker.pending && (
          <ul>
            {props.speaker.pending.map((booking, id) => (
              <li key={id}>
                <div className={style.verticalGrid}>
                  <div>
                    <p>Request for</p>
                    <p>
                      <b>{convertDateFormat(booking.bookingDateTime.date)}</b>
                    </p>
                  </div>

                  <div>
                    <div className={style.centreColumnTopRow}>
                      <p>Request from</p>
                      <p>sent at {convertDateFormat(booking.createdAt)}</p>
                    </div>
                    <p>{booking.organization.name}</p>
                  </div>

                  <div className={style.callToActionColumn}>
                    <button onClick={() => openPopup('accepted', booking)}>
                      Approve
                    </button>
                    {/* <button onClick={(e) => bookingStatus('accepted',booking)} >Approve</button> */}
                    <button
                      onClick={(e) => bookingStatus('rejected', booking._id)}
                    >
                      Decline
                    </button>
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
                  <div>
                    <p>Request for</p>
                    <p>
                      <b>{convertDateFormat(booking.bookingDateTime.date)}</b>
                    </p>
                  </div>

                  <div>
                    <div className={style.centreColumnTopRow}>
                      <p>Request from</p>
                      <p>sent at {convertDateFormat(booking.createdAt)}</p>
                    </div>
                    <p>{booking.organization.name}</p>
                  </div>

                  <div className={style.callToActionColumn}>
                    <button
                      onClick={(e) => bookingStatus('delete', booking._id)}
                    >
                      Cancel/Delete
                    </button>
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
                  <div>
                    <p>Request for</p>
                    <p>
                      <b>{convertDateFormat(booking.bookingDateTime.date)}</b>
                    </p>
                  </div>

                  <div>
                    <div className={style.centreColumnTopRow}>
                      <p>Request from</p>
                      <p>sent at {convertDateFormat(booking.createdAt)}</p>
                    </div>
                    <p>{booking.organization.name}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SpeakerBookingList;
