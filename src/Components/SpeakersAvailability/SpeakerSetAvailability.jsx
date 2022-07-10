import { Controller, useForm } from 'react-hook-form';
import SpeakerCalendar from '../calendar/speaker/speaker-calendar';
import style from './SpeakerSetAvailability.module.scss';

const SetSpeakerAvailability = () => {
    const { control } = useForm({
    defaultValues: {},
  });

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
    </>
  );
}

export default SetSpeakerAvailability;