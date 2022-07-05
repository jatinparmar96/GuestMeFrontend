import { Controller, useForm } from 'react-hook-form';
import { postBooking } from '../../Api/Booking.service';
import OrganizationCalendar from '../calendar/organization/organization-calendar';
import './RequestForm.module.scss';

const { times } = require('./Times');

const RequestForm = (props) => {
  const online = props.speaker.conditions.isOnline;
  const person = props.speaker.conditions.isInPerson;
  // eslint-disable-next-line no-unused-vars
  const organization = JSON.parse(localStorage.getItem('organization'));

  const { control, register, watch, getValues } = useForm();

  const handleSendRequest = (event) => {
    event.preventDefault();

    const request = {
      // speaker: {
      //   id: props.speaker.id,
      //   name: props.speaker.fullName,
      // },
      // organization: {
      //   id: organization.id,
      //   name: organization.organizationName,
      // },
      // bookingDateTime: {
      //   startDateTime: startTime,
      //   endDateTime: endTime,
      // },
      // location: location,
      // topic: topic,
      // message: message,
      // personInCharge: personInCharge,
      // deliveryMethod: deliveryMethod,
    };
    console.log(request);

    postBooking(request);
  };
  // const today = new Date();
  console.log(getValues());

  //TODO: Add speaker date values to the calendar
  return (
    <>
      <form onSubmit={(e) => handleSendRequest(e)}>
        <Controller
          name="bookingDateTime.date"
          control={control}
          render={({ field: { value, onChange } }) => {
            return <OrganizationCalendar value={value} onChange={onChange} />;
          }}
        />

        <label>
          {' '}
          Selected date* <span>* Select the date in the calendar</span>
          <input
            type="date"
            value={
              watch('bookingDateTime.date')?.toISOString().substring(0, 10) ||
              new Date().toISOString().substring(0, 10)
            }
            readOnly
          />
        </label>
        <label>
          Time* <span>* Timings are in PST(GMT-7)</span>
          <label>
            {' '}
            Start Time{' '}
            <select
              className="startTime"
              name="startTime"
              {...register('bookingDateTime.startDateTime', { required: true })}
            >
              {times.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
          <label>
            {' '}
            End Time
            <select
              className="endTime"
              name="endTime"
              id="endTime"
              {...register('bookingDateTime.endDateTime', { required: true })}
            >
              {times.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </label>
        </label>
        <label>
          {' '}
          Speech topic*
          <input
            type="text"
            placeholder="Enter the topic of the speech"
            {...register('topic', { required: true })}
          />
        </label>
        <label>
          {' '}
          Person in charge*
          <input
            type="text"
            placeholder="First Last"
            {...register('personInCharge', { required: true })}
          />
        </label>
        <label>
          Delivery method*
          <select
            className="deliveryMethod"
            {...register('deliveryMethod', { required: true })}
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
          <label>
            Location*
            <input
              type="text"
              placeholder="Enter the location"
              {...register('location', { required: true })}
            />
          </label>
        ) : null}
        <label>
          Details & Message*
          <textarea
            placeholder="Enter the details and message"
            {...register('message', { required: true })}
          />
        </label>
        <button className="sendRequest">Send</button>
      </form>
      {/* Create a form */}
    </>
  );
};

export default RequestForm;
