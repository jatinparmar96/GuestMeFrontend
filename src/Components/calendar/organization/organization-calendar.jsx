import { useState } from 'react';
import Calendar from 'react-calendar';
import { compareDatesFn } from '../../../Utils/Utils';
import '../calendar.scss';

const OrganizationCalendar = (props) => {
  const [dates] = useState(props.value || []);
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

  // Calender Props to Pass to Calendar Component
  const calendarProps = {
    onChange: handleCalenderDateChange,
    tileClassName: assignTileClass,
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
