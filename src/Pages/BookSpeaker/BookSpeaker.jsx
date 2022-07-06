import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getSpeaker } from '../../api/Speaker.service';
import { PageHeading } from '../../components/pageHeading/PageHeading';
import BookingSpeakerCard from '../../containers/bookingSpeakerCard/BookingSpeakerCard';
import BookRequest from '../../containers/bookRequest/BookRequest';
import style from './BookSpeaker.module.scss';

const BookSpeaker = (props) => {
  const [loadingState, setLoadingState] = useState(true);
  const [speakerData, setSpeakerData] = useState();
  const { id } = useParams();

  useEffect(() => {
    setLoadingState(true);
    getSpeaker(id)
      .then((response) => {
        if (response) {
          setSpeakerData(response.data);
          setLoadingState(false);
        }
      })

      .catch((error) => console.log(error));
  }, [id]);

  return (
    <>
      {loadingState ? (
        <p>Loading... </p>
      ) : (
        <>
          <div>
            <PageHeading text="Find a speaker" />
            <div>
              Home {'>'} Find a speaker {'>'} {speakerData.fullName} {'>'}{' '}
              Request
            </div>
          </div>
          <div className={style.bookSpeakerContainer}>
            <div className={style.bookForm}>
              <BookRequest speaker={speakerData} />
            </div>
            <div className={style.bookCard}>
              <BookingSpeakerCard speaker={speakerData} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookSpeaker;
