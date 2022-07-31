// import { useEffect, useState } from 'react';
// import { useRecoilState } from 'recoil';
// import { getSpeakerBookings } from '../../Api/Speaker.service';

// import tokenAtom from '../../Recoil/Authentication/atom';
import { Helmet } from 'react-helmet-async';

import BookingList from '../../Containers/BookingList/BookingList';
import style from './SpeakerBooking.module.scss';
const SpeakerBooking = (props) => {
  return (
    <>
      <Helmet>
        <title>GUEST ME - Speaker Booking</title>
      </Helmet>
      <div className={style.bookingList}>
        <BookingList />
      </div>
    </>
  );
};

export default SpeakerBooking;
