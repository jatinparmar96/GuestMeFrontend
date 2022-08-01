import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';
import { getSpeaker } from '../../Api/Speaker.service';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import Loader from '../../Components/loader/Loader';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import SpeakerPrimaryInformation from '../../Containers/Speaker_PrimaryInformation/SpeakerPrimaryInformation';
import SpeakerSecondaryInformation from '../../Containers/Speaker_SecondaryContainer/Speaker_SecondaryContainer';
import SpeakerTertiaryInformation from '../../Containers/Speaker_TertiaryContainer/Speaker_TertiaryContainer';
import style from './ViewSpeaker.module.scss';
const ViewSpeaker = (props) => {
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
      <Helmet>
        <title>GUEST ME - Speaker profile</title>
      </Helmet>

      {loadingState ? (
        <Loader />
      ) : (
        <>
          <div>
            <PageHeading text="Find a speaker" />
            <BreadCrumbs currentPosition={speakerData.fullName} />
          </div>
          <div className={style.white}></div>

          <div className={style.viewSpeakerContainer}>
            <div className={style.primary}>
              <SpeakerPrimaryInformation speaker={speakerData} />
            </div>
            <div className={style.grid}>
              <div className={style.secondary}>
                <SpeakerSecondaryInformation speaker={speakerData} />
              </div>
              <div className={style.tertiary}>
                <SpeakerTertiaryInformation speaker={speakerData} />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ViewSpeaker;
