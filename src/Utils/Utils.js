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
