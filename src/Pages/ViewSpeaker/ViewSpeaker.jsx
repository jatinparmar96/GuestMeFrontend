import { useEffect, useState } from 'react';
import { getSpeaker } from '../../Api/Speaker.service';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import SpeakerPrimaryInformation from '../../Containers/Speaker_PrimaryInformation/SpeakerPrimaryInformation';
import SpeakerSecondaryInformation from '../../Containers/Speaker_SecondaryContainer/Speaker_SecondaryContainer';
import SpeakerTertiaryInformation from '../../Containers/Speaker_TertiaryContainer/Speaker_TertiaryContainer';

const ViewSpeaker = (props) => {

  // const [ selectedSpeaker, setSelectedSpeaker ] = useState("62af5fb317f8d0a3e1fb7d5f");
  const selectedSpeaker = "62af5fb317f8d0a3e1fb7d5f";
  const [ speakerData, setSpeakerData ] = useState({});
  useEffect(() => {
    getSpeaker(selectedSpeaker)
      .then(response => {
        if (response) {
          setSpeakerData(response.data);
        }
      })
    .catch(error=>console.log(error))
  },[])

  return (
    <>
      {speakerData ?
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
        : null}
    </>
  );
}

export default ViewSpeaker;