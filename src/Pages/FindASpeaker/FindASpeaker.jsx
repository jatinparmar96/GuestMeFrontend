import React from 'react';

import { Filter } from '../../Containers/Filter/Filter';
import { Speakers } from '../../Containers/Speakers/Speakers';
import { PageHeading } from '../../Components/PageHeading/PageHeading';
import style from './FindASpeaker.module.scss';

/**@type {React.FC<any>} */
export const FindASpeaker = (props) => {
  return (
    <div>
      <PageHeading text="Find a speaker" />
      <div className={style.breadCrumbs}>Home {'>'} Find a speaker</div>
      <div className={style.contentContainer}>
        <aside>
          <Filter />
        </aside>
        <main>
          <Speakers />
        </main>
      </div>
    </div>
  );
};
