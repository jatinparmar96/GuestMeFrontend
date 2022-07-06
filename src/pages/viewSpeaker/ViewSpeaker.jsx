import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { getSpeaker } from '../../api/Speaker.service';
import { PageHeading } from '../../components/pageHeading/PageHeading';
import SpeakerPrimaryInformation from '../../containers/speaker_PrimaryInformation/SpeakerPrimaryInformation';
import SpeakerSecondaryInformation from '../../containers/speaker_SecondaryContainer/Speaker_SecondaryContainer';
import SpeakerTertiaryInformation from '../../containers/speaker_TertiaryContainer/Speaker_TertiaryContainer';
import style from './ViewSpeaker.module.scss';

const ViewSpeaker = (props) => {
  // const [ selectedSpeaker, setSelectedSpeaker ] = useState("");
  //TODO: Change this fixedID
  // const selectedSpeaker = '62ba919a08bf555e1d151d72';
  const [loadingState, setLoadingState] = useState(true);
  const [speakerData, setSpeakerData] = useState();
  const { id } = useParams();

  // TODO: Add dependency
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
              Home {'>'} Find a speaker {'>'} {speakerData.fullName}
            </div>
          </div>

          <div className={style.viewSpeakerContainer}>
            <div className={style.primary}>
              <SpeakerPrimaryInformation speaker={speakerData} />
            </div>
            <div className={style.secondary}>
              <SpeakerSecondaryInformation speaker={speakerData} />
            </div>
            <div className={style.tertiary}>
              <SpeakerTertiaryInformation speaker={speakerData} />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ViewSpeaker;
