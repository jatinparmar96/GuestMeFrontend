import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { getSpeakerBookings } from '../../api/Speaker.service';
import SpeakerBookingList from '../../components/speakerBookingList/SpeakerBookingList';
import tokenAtom from '../../recoil/authentication/atom';

const SpeakerBooking = (props) => {
  const [loadingState, setLoadingState] = useState(true);
  const [speakerData, setSpeakerData] = useState();
  const [user] = useRecoilState(tokenAtom);

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
  }, [user]);

  return (
    <>
      {loadingState ? (
        <p>Loading... </p>
      ) : (
        <>
          <SpeakerBookingList speaker={speakerData} />
        </>
      )}
    </>
  );
};

export default SpeakerBooking;
