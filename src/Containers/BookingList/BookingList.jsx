import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getSpeakerBookings } from '../../Api/Speaker.service';

import SpeakerHistoryList from '../../Components/SpeakerBookingList/History/SpeakerHistoryList';
import SpeakerUpcomingList from '../../Components/SpeakerBookingList/Upcoming/SpeakerUpcomingList';
import SpeakerWaitingList from '../../Components/SpeakerBookingList/Waiting/SpeakerWaitingList';
import tokenAtom from '../../Recoil/Authentication/atom';
import style from './BookingList.module.scss';

const BookingList = (props) => {
  const [loadingState, setLoadingState] = useState(true);
  const [speakerData, setSpeakerData] = useState();
  const [user] = useRecoilState(tokenAtom);
  const [newBookingData, setNewBookingData] = useState('');

  useEffect(() => {
    setLoadingState(true);
    if (user.name._id) {
      getSpeakerBookings(user.name._id)
        .then((response) => {
          console.log(response);
          if (response) {
            const speakers = response.data;
            speakers.history = speakers.rejected;
            setSpeakerData(speakers);
            setLoadingState(false);
          }
        })
        .catch((error) => console.log(error));
    }
  }, [user, newBookingData]);
  return (
    <>
      {loadingState ? (
        <p>Loading... </p>
      ) : (
        <>
          <div className={style.lists}>
            <h2>Booking</h2>
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
          </div>
        </>
      )}
    </>
  );
};

export default BookingList;
