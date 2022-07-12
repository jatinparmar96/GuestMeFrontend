/**
 * @param {string} token
 * @param {object} userData
 * @param {'speaker' | 'organization'} userType
 * @returns {boolean}
 */

import { months } from './Constants';

export const setAuthInformation = (token, userData = {}, userType) => {
  try {
    localStorage.setItem('token', token);
    localStorage.setItem(userType, JSON.stringify(userData));
  } catch (error) {
    console.log(error);
    return false;
  }
  return true;
};

export const removeAuthInformation = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('speaker');
  localStorage.removeItem('organization');
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

export const convertDateFormat = (ISODate) => {
  const date = ISODate;

  // console.log(date);
  var d = new Date(date).getDate();
  var m = new Date(date).getMonth();
  var y = new Date(date).getFullYear();

  var dateString =
    //  (d <= 9 ? '0' + d : d) + '-' + (m <= 9 ? '0' + m : months[m]) + '-' + y;
    months[m] + ' ' + (d <= 9 ? '0' + d : d) + ' , ' + y;
  return dateString;
};
