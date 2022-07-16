import { useEffect, useState } from 'react';
import { getRandomSpeakers } from '../../../Api/Speaker.service';
import { Speaker } from '../../Speaker/Speaker';
import style from './FeaturedSpeakers.module.scss';
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
    <div className={style.featuredSpeakers}>
      {speakers.map((speaker, index) => (
        <Speaker speaker={speaker} key={index} />
      ))}
    </div>
  );
};

export default FeaturedSpeakers;
