import { useState } from 'react';
import { postBooking } from '../../api/Booking.service';
const { times } = require('./Times');

const RequestForm = (props) => {
  const [ startTime, setStartTime ] = useState('');
  const [ endTime, setEndTime ] = useState('');
  const [ deliveryMethod, setDeliveryMethod ] = useState('');
  const [ topic, setTopic ] = useState('');
  const [ personInCharge, setPersonInCharge ] = useState('');
  const [ location, setLocation ] = useState('');
  const [ message, setMessage ] = useState('');

  const online = props.speaker.conditions.isOnline;
  const person = props.speaker.conditions.isInPerson;
  const organization = JSON.parse(localStorage.getItem('organization'));

      const handleStartTimeChange = (event) => {
        setStartTime(event.target.value);

    };
      const handleEndTimeChange = (event) => {
        setEndTime(event.target.value);

  };

    const handleTopic = (event) => {
    setTopic(event.target.value);

  };

  const handlePersonInCharge = (event) => {
    setPersonInCharge(event.target.value);
  };

      const handleDeliveryMethod = (event) => {
        setDeliveryMethod(event.target.value);

  };

  const handleLocation = (event) => {
    setLocation(event.target.value);
  };

  const handleMessage = (event) => {
    setMessage(event.target.value);
  }

  const handleSendRequest = (event) => {
    event.preventDefault();

    const request = {
      speaker: {
        id: props.speaker.id,
        name:props.speaker.fullName
      },
      organization: {
        id: organization.id,
        name:organization.organizationName
      },
      bookingDateTime: {
        startDateTime: startTime,
        endDateTime: endTime
      },

      location: location,
      topic: topic,
      message: message,
      personInCharge: personInCharge,
      deliveryMethod: deliveryMethod

    };
    console.log(request);

    postBooking(request);

  }

  return (
    <>
      <form onSubmit={e=>handleSendRequest(e)}>
        <label> Selected date* <span>* Select the date in the calendar</span>
          <input type="date" onClick={(e) => e.preventDefault()} disabled/>
        </label>
        <label>Time* <span>* Timings are in PST(GMT-7)</span>
          <label> Start Time
            <select className='startTime'
            name="startTime" id="startTime"
            onChange={handleStartTimeChange}>

            {times.map((time, index) =>
            <option key={index} value={time}>{time}</option>
            )}
            </select>
          </label>
          <label> End Time
            <select className='endTime'
            name="endTime" id="endTime"
            onChange={handleEndTimeChange}>

            {times.map((time, index) =>
            <option key={index} value={time}>{time}</option>
            )}
            </select>
          </label>

        </label>
        <label> Speech topic*
          <input type="text" placeholder="Enter the topic of the speech" onChange={handleTopic}/>
        </label>
        <label> Person in charge*
          <input type="text" placeholder="First Last" onChange={handlePersonInCharge}/>
        </label>
        <label>Delivery method*
          <select className='deliveryMethod'
            name="deliveryMethod"
            id="deliveryMethod"
            onChange={handleDeliveryMethod}>
            <option value="">Select a delivery method</option>
            {online ? <option key={1} value="isOnline">Online</option> : null}
            {person ? <option key={2} value="isInPerson">In Person</option> : null}
          </select>
        </label>
        {deliveryMethod === 'inPerson' ?
          <label>Location*
            <input type="text" placeholder="Enter the location" onChange={handleLocation} />
          </label>
          : null}
        <label>Details & Message*
          <textarea placeholder="Enter the details and message" onChange={handleMessage}/>
        </label>
        <button className='sendRequest' >Send</button>

      </form>
    </>
  );
};

export default RequestForm;