/**
 * @param {string} token
 * @returns {boolean}
 */
export const setSpeakerInformation = (token) => {
  try {
    const speaker = decodePayloadFromToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('speaker', JSON.stringify(speaker));
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

/**
 *
 * @returns {Object}
 */
export const getSpeakerInformationFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('speaker'));
};

/**
 * @param {string} token
 * @returns {Object}
 */
const decodePayloadFromToken = (token) => {
  try {
    const result = JSON.parse(
      decodeURIComponent(escape(window.atob(token.split('.')[1])))
    );
    return result;
  } catch (error) {
    console.error(error);
    return null;
  }
};

/**
 * ?Maybe Find a better way in the future
 * @param {*} date1
 * @param {*} date2
 * @returns
 */
export const compareDatesFn = (date1, date2) =>
  date1.setHours(0, 0, 0, 0) === date2.setHours(0, 0, 0, 0);

/**
 * Helper class to add days to date
 * @param {Date} date
 * @param {number} days
 */
export const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate;
};
