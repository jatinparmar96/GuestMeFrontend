import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpeaker } from '../../Api/Speaker.service';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import BookRequest from '../../Containers/BookRequest/BookRequest';


const BookSpeaker = (props) => {

  const [loadingState, setLoadingState] = useState(true);
  const [ speakerData, setSpeakerData ] = useState();
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
              Home {'>'} Find a speaker {'>'} {speakerData.fullName} {'>'} Request
              </div>
            </div>
            <BookRequest speaker={speakerData} />


        </>
      )}
    </>
  );
};

export default BookSpeaker;
