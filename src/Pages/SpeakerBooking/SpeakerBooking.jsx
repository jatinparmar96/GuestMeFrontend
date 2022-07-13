import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getSpeakerBookings } from '../../Api/Speaker.service';
import SpeakerBookingList from '../../Components/SpeakerBookingList/SpeakerBookingList';
import tokenAtom from '../../Recoil/Authentication/atom';

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
      {loadingState ? (
        <p>Loading... </p>
      ) : (
        <>
          <SpeakerBookingList
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
