import { useEffect, useState } from 'react';
import { getSpeaker } from '../../Api/Speaker.service';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import SpeakerPrimaryInformation from '../../Containers/Speaker_PrimaryInformation/SpeakerPrimaryInformation';
import SpeakerSecondaryInformation from '../../Containers/Speaker_SecondaryContainer/Speaker_SecondaryContainer';
import SpeakerTertiaryInformation from '../../Containers/Speaker_TertiaryContainer/Speaker_TertiaryContainer';

const ViewSpeaker = (props) => {

  // const [ selectedSpeaker, setSelectedSpeaker ] = useState("");
  //TODO: Change this fixedID
  const selectedSpeaker = "62ba919a08bf555e1d151d72";
  const [loadingState, setLoadingState] = useState(false);
  const [ speakerData, setSpeakerData ] = useState();


    useEffect(function loading(){

      setLoadingState(false);

    }, [speakerData])

  // TODO: Add dependency
  useEffect(() => {

    setLoadingState(true);
    getSpeaker(selectedSpeaker)
      .then(response => {
        if (response) {
          setSpeakerData(response.data);
        }
      })
    .catch(error=>console.log(error))
  }, [])


  return (
    <>
      {loadingState ? (<p>Loading... </p>)
      : (
          <>
            <div>
              <PageHeading text="Find a speaker" />
              <div>Home {'>'} Find a speaker {'>'} {speakerData.fullName }</div>
            </div>
            <div>
              <SpeakerPrimaryInformation speaker={speakerData} />
            </div>
            <div>
              <SpeakerSecondaryInformation speaker={speakerData} />
            </div>
            <div>
              <SpeakerTertiaryInformation speaker={speakerData} />
            </div>
          </>
        )

         }
    </>
  );
}

export default ViewSpeaker;