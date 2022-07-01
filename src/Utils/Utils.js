/**
 * @param {string} token
 * @param {'speaker' | 'organization'} userType
 * @returns {boolean}
 */
export const setAuthInformation = (token, userType) => {
  try {
    const speaker = decodePayloadFromToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem(userType, JSON.stringify(speaker));
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

/**
 * @param {'speaker' | 'organization'} userType
 * @returns {Object}
 */
export const getAuthInformationFromLocalStorage = (userType) => {
  return JSON.parse(localStorage.getItem(userType));
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
