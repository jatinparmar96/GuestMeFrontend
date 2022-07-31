import { Controller, useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { postBooking } from '../../Api/Booking.service';
import OrganizationCalendar from '../calendar/organization/organization-calendar';
import style from './RequestForm.module.scss';
const { times } = require('./Times');

const RequestForm = (props) => {
  const online = props.speaker.conditions.isOnline;
  const person = props.speaker.conditions.isInPerson;
  // eslint-disable-next-line no-unused-vars
  const organization = JSON.parse(localStorage.getItem('user'));

  const {
    control,
    register,
    watch,
    getValues,
    reset,
    formState: { isDirty, isValid },
  } = useForm({
   mode: "onChange"
  });



  const handleSendRequest = (event) => {
    event.preventDefault();

    let formData = {
      ...getValues(),
      speaker: {
        id: props.speaker._id,
        name: props.speaker.fullName,
      },
      organization: {
        id: organization._id,
        name: organization.organizationName,
      },
    };

    if (formData.bookingDateTime.date === undefined) {
      formData.bookingDateTime.date = new Date(props.speaker.availability[0])
        .toISOString()
        .substring(0, 10);
    }
    console.log(formData);
    postBooking(formData)
      .then(
        toast('Request sent successfully', { type: 'success', autoClose: 2000 })
    )
      .then(reset())
      .catch((error) => console.error(error));
  };
  // const today = new Date();


  //TODO: Add speaker date values to the calendar
  return (
    <>
      <form
        className={style.requestForm}
        onSubmit={(e) => handleSendRequest(e)}
      >
        <div className={style.organizationCalendar}>
          <Controller
            name="bookingDateTime.date"
            control={control}
            render={({ field: { value, onChange } }) => {
              return (
                <OrganizationCalendar
                  value={props.speaker.availability}
                  onChange={onChange}
                />
              );
            }}
          />
        </div>
        <div className={style.formGrid}>
          <label className={style.date}>
            {' '}
            <div>
              Selected date* <span>* Select the date in the calendar</span>
            </div>
            <input
              type="date"
              value={
                watch('bookingDateTime.date')?.toISOString().substring(0, 10) ||
                new Date(props.speaker.availability[0])
                  .toISOString()
                  .substring(0, 10)
              }
              readOnly
            />
          </label>
          <label className={style.time}>
            <div>
              Time* <span>* Timings are in PST(GMT-7)</span>
            </div>
            <div className={style.timeSelectors}>
              <label classNames={style.startTime} aria-label="Start Time">
                <select
                  className={style.timeSelect}
                  name="startTime"
                  {...register('bookingDateTime.startDateTime', {

                  })}
                >
                  {times.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>

              <label className={style.endTime} aria-label="End Time">
                <select
                  className={style.timeSelect}
                  name="endTime"
                  id="endTime"
                  {...register('bookingDateTime.endDateTime', {

                  })}
                >
                  {times.map((time, index) => (
                    <option key={index} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </label>
            </div>
          </label>
          <label className={style.topic}>
            {' '}
            Speech topic*
            <input
              type="text"
              placeholder="Enter the topic of the speech"
              {...register('topic', { required: 'This is a required field', })}

            />
          </label>
          <label className={style.personInCharge}>
            {' '}
            Person in charge*
            <input
              type="text"
              placeholder="First Last"
              {...register('personInCharge', { required: 'This is a required field', })}
            />
          </label>
          <label className={style.deliveryMethod}>
            Delivery method*
            <select
              className={style.deliveryMethodSelector}
              {...register('deliveryMethod', { required: 'This is a required field', })}
            >
              <option value="" disabled>
                Select a delivery method
              </option>
              {online ? (
                <option key={1} value="isOnline">
                  Online
                </option>
              ) : null}
              {person ? (
                <option key={2} value="isInPerson">
                  In Person
                </option>
              ) : null}
            </select>
          </label>
          {watch('deliveryMethod') === 'isInPerson' ? (
            <label className={style.location}>
              Location*
              <input
                type="text"
                placeholder="Enter the location"
                {...register('location', { required: 'This is a required field',})}
              />
            </label>
          ) : null}
          <label className={style.message}>
            Details & Message*
            <textarea
              className={style.message}
              placeholder="Enter the details and message"
              {...register('message', { required: 'This is a required field', })}
            />
          </label>

          <div className={style.conditionsContainer}>
            <label htmlFor="conditions" className={style.conditions}>
              <input type="checkbox" name="conditions" id="conditions" />
              <span className={style.conditionsSpan}>
                By sending the request I agree that the contact information
                (organization name, email, and phone) will be sent to the
                speaker.
              </span>
            </label>
          </div>
          <button
            type="submit"
            className={style.sendRequest}
            disabled={!(isDirty && isValid)}
          >
            Send
          </button>
        </div>
      </form>
      {/* Create a form */}
    </>
  );
};

export default RequestForm;
