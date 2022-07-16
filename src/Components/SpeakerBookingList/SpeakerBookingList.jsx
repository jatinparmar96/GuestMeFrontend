import { useEffect, useState } from 'react';
import { bookingResponse } from '../../Api/Booking.service';
import { convertDateFormat } from '../../Utils/Utils';
import AlertDialog from '../ModalPopup/ModalPopup';
import OrganizationDetails from '../OrganizationDetails/OrganizationDetails';
import style from './SpeakerBookingList.module.scss';

const SpeakerBookingList = (props) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [buttonAction, setButtonAction] = useState('');
  const [booking, setBooking] = useState();
  const [bookingDataOrganization, setBookingDataOrganization] = useState([]);

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

  const organizationData = (id) => {
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

      <h2>Booking</h2>

      <div>
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
                    <p>
                      <button onClick={(e) => organizationData(id)}>
                        {booking.organization.name}
                      </button>
                    </p>

                    {bookingDataOrganization[id] ? (
                      <OrganizationDetails booking={booking} />
                    ) : (
                      ''
                    )}
                  </div>

                  <div className={style.callToActionColumn}>
                    <button onClick={() => openPopup('accepted', booking)}>
                      Approve
                    </button>
                    {/* <button onClick={(e) => bookingStatus('accepted',booking)} >Approve</button> */}
                    <button onClick={(e) => openPopup('rejected', booking)}>
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
                    <button onClick={(e) => openPopup('deleted', booking)}>
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
