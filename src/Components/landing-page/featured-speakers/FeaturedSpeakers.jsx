import { useEffect, useState } from 'react';
import { getRandomSpeakers } from '../../../Api/Speaker.service';
import { Speaker } from '../../Speaker/Speaker';

const FeaturedSpeakers = () => {
  const [speakers, setSpeakers] = useState([]);
  useEffect(() => {
    getRandomSpeakers()
      .then(({ data }) => {
        setSpeakers(data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <>
      {speakers.map((speaker, index) => (
        <Speaker speaker={speaker} key={index} />
      ))}
    </>
  );
};

export default FeaturedSpeakers;
