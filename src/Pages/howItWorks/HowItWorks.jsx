//@ts-check
import { motion } from 'framer-motion';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import { PageHeading } from '../../Components/PageHeading/PageHeading';

import OrganizationHowItWorks from '../../Containers/howItWorksContainer/organizationHowItWorks/OrganizationHowItWorks';
import SpeakerHowItWorks from '../../Containers/howItWorksContainer/speakerHowItWorks/SpeakerHowItWorks';

import style from './HowItWorks.module.scss';
const HowItWorks = (props) => {
  /**@type {[boolean, React.Dispatch<boolean>]} */
  const [isForSpeaker, setIsForSpeaker] = useState(true);
  return (
    <>
      <Helmet>
        <title>GUEST ME - How it works</title>
      </Helmet>
      <PageHeading text="How it works" />
      <BreadCrumbs currentPosition="How it works" />
      <motion.div
        className={style.howItWorks}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}

      >
      <div className={style.pageContainer}>
        <div className={style.roleTabContainer}>
          <p
            onClick={() => setIsForSpeaker(true)}
            className={isForSpeaker ? undefined : style.unselectedRoleTab}
          >
            For a speaker
          </p>
          <p
            onClick={() => setIsForSpeaker(false)}
            className={isForSpeaker ? style.unselectedRoleTab : undefined}
          >
            For an organization
          </p>
        </div>
        {isForSpeaker ? <SpeakerHowItWorks /> : <OrganizationHowItWorks />}
        </div>
      </motion.div>
    </>
  );
};

export default HowItWorks;
