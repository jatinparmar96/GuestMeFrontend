import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  getSpeakerAvailability,
  updateSpeakerProfile,
} from '../../Api/Speaker.service';
import useAuth from '../../auth/UseAuth';
import tokenAtom from '../../Recoil/Authentication/atom';
import SpeakerCalendar from '../calendar/speaker/speaker-calendar';
import style from './SpeakerSetAvailability.module.scss';

const SetSpeakerAvailability = () => {
  const { control, setValue, getValues } = useForm({
    defaultValues: {
      availability: [],
    },
  });

  const [token] = useAuth(tokenAtom);

  useEffect(() => {
    (async () => {
      if (token.name.userType === 'speaker') {
        const availabilities = await getSpeakerAvailability(token.name._id);
        setValue('availability', availabilities.data);
      }
    })();
  }, [token, setValue]);
  const handleSubmit = async () => {
    updateSpeakerProfile(getValues()).then(() => console.log('updated'));
  };
  return (
    <>
      <h3>Availability</h3>
      <div className={style.reference}>
        <div className={style.available}></div> <span>Available</span>
        <div className={style.today}></div>
        <span>Today</span>
      </div>
      <Controller
        name="availability"
        control={control}
        render={({ field: { name, onChange, value } }) => (
          <SpeakerCalendar {...{ name, onChange, value }}></SpeakerCalendar>
        )}
      />
      <button onClick={handleSubmit}>Update Availability</button>
    </>
  );
};

export default SetSpeakerAvailability;
