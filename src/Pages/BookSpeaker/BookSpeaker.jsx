import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpeaker } from '../../Api/Speaker.service';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import { Helmet } from 'react-helmet';
import BookingSpeakerCard from '../../Containers/BookingSpeakerCard/BookingSpeakerCard';
import BookRequest from '../../Containers/BookRequest/BookRequest';
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
      <Helmet>
        <title>GUEST ME - Book speaker</title>
      </Helmet>
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
            <div className={style.beige}>
              <div className={style.bookForm}>
                <BookRequest speaker={speakerData} />
              </div>
            </div>
            <div className={style.white}>
              <div className={style.bookCard}>
                <BookingSpeakerCard speaker={speakerData} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default BookSpeaker;
