/**
 * @param {string} token
 * @param {object} userData
 * @param {'speaker' | 'organization'} userType
 * @returns {boolean}
 */
export const setAuthInformation = (token, userData = {}, userType) => {
  try {
    userData.userType = userType;
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(userData));
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export const removeAuthInformation = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('user');
};

/**
 * @param {'speaker' | 'organization' | 'user'} userType
 * @returns {Object}
 */
export const getAuthInformationFromLocalStorage = (userType) => {
  return JSON.parse(localStorage.getItem(userType));
};

/**
 * @param {string} token
 * @returns {Object}
 */
// eslint-disable-next-line no-unused-vars
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
