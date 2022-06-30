// @ts-check
import { useState } from 'react';

import { OrganizationRegisterContainer } from '../../Containers/Registers/OrganizationRegisterContainer/OrganizationRegisterContainer';
import { SpeakerRegisterContainer } from '../../Containers/Registers/SpeakerRegisterContainer/SpeakerRegisterContainer';

import styles from './Register.module.scss';

export const Register = (props) => {
  const [isSpeaker, setIsSpeaker] = useState(true);

  const registerContainer = isSpeaker ? (
    <SpeakerRegisterContainer />
  ) : (
    <OrganizationRegisterContainer />
  );

  return (
    <>
      <div className={styles.radioContainer}>
        <input
          type="radio"
          name="role"
          id="role-speaker"
          defaultChecked={isSpeaker}
          onClick={() => setIsSpeaker(true)}
        />
        <label htmlFor="role-speaker">I am a speaker</label>
      </div>
      <div>
        <input
          type="radio"
          name="role"
          id="role-organization"
          onClick={() => setIsSpeaker(false)}
        />
        <label htmlFor="role-organization">I am a organization</label>
      </div>
      {registerContainer}
    </>
  );
};
