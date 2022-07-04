import style from './SpeakerBookingList.module.scss';



const SpeakerBookingList = (props) => {
  return(
    <>
      <div>
        <h3>Waiting List</h3>

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
            <p>Organization Name</p>

          </div>

        <div className={style.callToActionColumn}>
          <p>Approve</p>
          <p>Decline</p>
        </div>

        </div>
</div>
      <h3>Upcoming List</h3>

      <h3>History List</h3>
    </>
   );

}

export default SpeakerBookingList;
