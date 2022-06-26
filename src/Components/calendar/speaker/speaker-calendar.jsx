import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import style from './speaker-calendar.module.scss';

// Maybe Find a better way in the future
const compareDatesFn = (date1, date2) =>
  date1.setHours(0, 0, 0, 0) === date2.setHours(0, 0, 0, 0);

const SpeakerCalendar = (props) => {
  const [dates, setDates] = useState(props.value || []);

  /**
   * TODO:
   * Don't allow to select past dates
   * Allow Recurring function (optional)
   */
  const handleCalenderDateChange = (e) => {
    const index = dates.findIndex((item) => compareDatesFn(item, new Date(e)));

    if (index === -1) {
      setDates((prevValue) => [...prevValue, new Date(e)]);
    } else {
      const newDateArr = dates.filter(
        (item) => !compareDatesFn(item, new Date(e))
      );
      setDates(newDateArr);
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
  const CalenderProps = {
    onChange: handleCalenderDateChange,
    tileClassName: assignTileClass,
  };

  // Pass value prop only if valid value exists
  // if (dates && dates.length) {
  //   CalenderProps.value = dates;
  // }

  return (
    <>
      <input type="text" className="custom-input"></input>
      <Calendar {...CalenderProps} selectRange={false} />
    </>
  );
};

export default SpeakerCalendar;
