import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { compareDatesFn } from '../../../Utils/Utils';
import '../calendar.scss';

const SpeakerCalendar = (props) => {
  const [dates, setDates] = useState([]);
  /**
   * TODO:
   * Don't allow to select past dates
   * Allow Recurring function (optional)
   */
  const handleCalenderDateChange = (e) => {
    const index = dates.findIndex((item) => compareDatesFn(item, new Date(e)));
    let newDatesArr = dates;
    if (index === -1) {
      newDatesArr = [...newDatesArr, new Date(e)];
    } else {
      newDatesArr = newDatesArr.filter(
        (item) => !compareDatesFn(item, new Date(e))
      );
    }
    setDates(newDatesArr);
    props.onChange(newDatesArr);
  };
  const assignTileClass = ({ date, view }) => {
    return view === 'month' &&
      dates &&
      dates.some((item) => compareDatesFn(item, date))
      ? 'highlight'
      : '';
  };
  const tileDisabled = ({ date, view }) => {
    return view === 'month' && date.getTime() <= new Date().getTime();
  };
  useEffect(() => {
    // Sanitize and transform Values
    if (props.value?.length) {
      const datesArr = props.value.map((item) => new Date(item));
      setDates(datesArr || []);
    }
  }, [props.value]);

  // Calender Props to Pass to Calendar Component
  const CalenderProps = {
    onChange: handleCalenderDateChange,
    tileClassName: assignTileClass,
    tileDisabled: tileDisabled,
  };

  // Pass value prop only if valid value exists
  // if (dates && dates.length) {
  //   CalenderProps.value = dates;
  // }

  return (
    <>
      <Calendar
        locale="en-US"
        className="speaker-calendar"
        {...CalenderProps}
      />
    </>
  );
};

export default SpeakerCalendar;
