import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getSpeakerBookings } from '../../Api/Speaker.service';
import SpeakerWaitingList from '../../Components/SpeakerBookingList/Waiting/SpeakerWaitingList';

import tokenAtom from '../../Recoil/Authentication/atom';
import { Helmet } from 'react-helmet-async';
import SpeakerUpcomingList from '../../Components/SpeakerBookingList/Upcoming/SpeakerUpcomingList';
import SpeakerHistoryList from '../../Components/SpeakerBookingList/History/SpeakerHistoryList';

const SpeakerBooking = (props) => {
  const [loadingState, setLoadingState] = useState(true);
  const [speakerData, setSpeakerData] = useState();
  const [user] = useRecoilState(tokenAtom);
  const [newBookingData, setNewBookingData] = useState('');

  useEffect(() => {
    setLoadingState(true);
    if (user.name._id) {
      getSpeakerBookings(user.name._id)
        .then((response) => {
          // console.log(response)
          if (response) {
            setSpeakerData(response.data);
            setLoadingState(false);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [user, newBookingData]);

  return (
    <>
      <Helmet>
        <title>GUEST ME - Speaker Booking</title>
      </Helmet>
      {loadingState ? (
        <p>Loading... </p>
      ) : (
        <>
          <SpeakerWaitingList
            speaker={speakerData}
            newBookingData={newBookingData}
            setNewBookingData={setNewBookingData}
          />
          <SpeakerUpcomingList
            speaker={speakerData}
            newBookingData={newBookingData}
            setNewBookingData={setNewBookingData}
          />
          <SpeakerHistoryList
            speaker={speakerData}
            newBookingData={newBookingData}
            setNewBookingData={setNewBookingData}
          />
        </>
      )}
    </>
  );
};

export default SpeakerBooking;
