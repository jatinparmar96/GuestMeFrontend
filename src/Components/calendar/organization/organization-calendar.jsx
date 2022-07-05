import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { compareDatesFn } from '../../../Utils/Utils';
import '../calendar.scss';

const OrganizationCalendar = (props) => {
  const [dates, setDates] = useState([]);

  const handleCalenderDateChange = (e) => {
    // Open Booking Modal
    if (props.onChange) {
      props.onChange(e);
      console.log(e);
    } else {
      console.log(e);
    }
  };
  const assignTileClass = ({ date, view }) => {
    return view === 'month' &&
      dates &&
      dates.some((item) => compareDatesFn(item, date))
      ? 'highlight'
      : '';
  };

  useEffect(() => {
    // Sanitize and transform Values
    if (props.value?.length) {
      const datesArr = props.value.map((item) => new Date(item));
      setDates(datesArr || []);
    }
  }, [props.value]);

  const tileDisabled = ({ date, view }) => {
    return view === 'month' &&
      dates &&
      dates.some((item) => compareDatesFn(item, date))
      ? false
      : true;
  };

  // Calender Props to Pass to Calendar Component
  const calendarProps = {
    onChange: handleCalenderDateChange,
    tileClassName: assignTileClass,
    tileDisabled: tileDisabled,
  };

  return (
    <Calendar
      locale="en-US"
      className="organization-calendar"
      {...calendarProps}
    ></Calendar>
  );
};

export default OrganizationCalendar;
