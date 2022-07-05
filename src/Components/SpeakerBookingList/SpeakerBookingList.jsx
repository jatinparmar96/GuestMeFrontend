import style from './SpeakerBookingList.module.scss';



const SpeakerBookingList = (props) => {

  console.log(props.speaker);




  return(
    <>
      <div>
        <h3>Waiting List</h3>

        {props.speaker.pending && (<ul>
          {props.speaker.pending.map((booking, id) => (
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
          <button onClick={() =>{alert("The booking was accepted!!")}}>Approve</button>
          <button>Decline</button>
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
          <button>Cancel/Delete</button>

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

        <div className={style.callToActionColumn}>
          <button>Cancel/Delete</button>

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
