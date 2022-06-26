import { useState } from 'react';
import Calendar from 'react-calendar';
import { compareDatesFn } from '../../../Utils/Utils';
import style from '../calendar.module.scss';

const OrganizationCalendar = (props) => {
  const [dates] = useState(props.value || []);

  const handleCalenderDateChange = (e) => {
    // Open Booking Modal
    if (props.onSelect) {
      props.onSelect(e);
    } else {
      console.log(e);
    }
  };
  const assignTileClass = ({ date, view }) => {
    return view === 'month' &&
      dates &&
      dates.some((item) => compareDatesFn(item, date))
      ? style.example
      : '';
  };

  // Calender Props to Pass to Calendar Component
  const calendarProps = {
    onChange: handleCalenderDateChange,
    tileClassName: assignTileClass,
  };
  return <Calendar {...calendarProps}></Calendar>;
};

export default OrganizationCalendar;
