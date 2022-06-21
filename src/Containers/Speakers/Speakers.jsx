import React, { useEffect, useState } from 'react';

import { SpeakerList } from '../../Components/SpeakerList/SpeakerList';

import style from './Speakers.module.scss';

/**@type {React.FC<any>} */
export const Speakers = (props) => {
  const [speakers, setSpeakers] = useState();

  useEffect(() => {
    // Get speakers from API

    const mockSpeaker = {
      id: 1,
      userName: 'John Doe',
      userLastname: "Doe's Lastname",
      title: 'Title',
      profilePicture: 'https://picsum.photos/id/237/200/300',
      expertise: ['React x TypeScript', 'Redux', 'NodeJS', 'Recoil', 'Angular'],
      reviewCount: 10,
    };

    setSpeakers([mockSpeaker, mockSpeaker, mockSpeaker, mockSpeaker]);
  }, []);

  return (
    <div>
      <div className={style.speakersHeading}>
        <div className="resultCounter">
          Results: 1-10 speakers / 125 speakers
        </div>
        <div className={style.paging}>
          {'<'} {'>'}
        </div>
      </div>
      <SpeakerList speakers={speakers} />
    </div>
  );
};
