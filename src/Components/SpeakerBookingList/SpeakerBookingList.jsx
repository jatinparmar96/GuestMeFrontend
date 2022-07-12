import { bookingResponse } from '../../Api/Booking.service';
import { convertDateFormat } from '../../Utils/Utils';
import style from './SpeakerBookingList.module.scss';



const SpeakerBookingList = (props) => {

   console.log(props.speaker);



  const bookingStatus = (e,id) => {
console.log(id)
    let data = {
      status: e,
  }
    bookingResponse(data,id);
  }


  return(
    <>
      <div>
        <h3>Waiting List</h3>

        {props.speaker.pending && (<ul>
          {props.speaker.pending.map((booking, id) => (
          <li key={id}>

            <div className={style.verticalGrid}>

        <div>
            <p>Request for</p>
                  <p><b>{ convertDateFormat(booking.bookingDateTime.date)}</b></p>
          </div>

          <div>
            <div className={style.centreColumnTopRow}>
            <p>Request from</p>
              <p>sent at June 1st, 2022</p>
            </div>
                <p>{booking.organization.name }</p>

          </div>

        <div className={style.callToActionColumn}>
                  <button onClick={(e) => bookingStatus('accepted',booking)}>Approve</button>
          <button onClick={(e) =>bookingStatus('rejected',booking._id)}>Decline</button>
        </div>

        </div>
          </li>

          ))}



</ul>)}


      </div>

      <div>
      <h3>Upcoming List</h3>

        {props.speaker.accepted && (<ul>
 {props.speaker.accepted.map((booking, id) => (
          <li key={id}>
            {/* <p>{ booking.location}</p> */}
            <div className={style.verticalGrid}>

        <div>
            <p>Request for</p>
        <p><b>July 7th, 2022</b></p>
          </div>

          <div>
            <div className={style.centreColumnTopRow}>
            <p>Request from</p>
              <p>sent at June 1st, 2022</p>
            </div>
                <p>{booking.organization.name }</p>

          </div>

        <div className={style.callToActionColumn}>
          <button onClick={(e) => bookingStatus('delete',booking._id)}>Cancel/Delete</button>

        </div>

        </div>
          </li>

          ))}


        </ul>)}

      </div>
      <div>
        <h3>History List</h3>

        {props.speaker.accepted && (<ul>
 {props.speaker.accepted.map((booking, id) => (
          <li key={id}>
            {/* <p>{ booking.location}</p> */}
            <div className={style.verticalGrid}>

        <div>
            <p>Request for</p>
        <p><b>July 7th, 2022</b></p>
          </div>

          <div>
            <div className={style.centreColumnTopRow}>
            <p>Request from</p>
              <p>sent at June 1st, 2022</p>
            </div>
                <p>{booking.organization.name }</p>

          </div>



        </div>
          </li>

          ))}


        </ul>)}


        </div>
    </>
   );

}

export default SpeakerBookingList;
