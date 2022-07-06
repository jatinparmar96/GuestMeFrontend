/**
 * Get POST PUT DELETE
 *
 */
import axios from 'axios';

/**
 * If mode is development, use local server, else use Heroku server.
 */
const BASE_HTTP_PROTOCOL =
  process.env.REACT_APP_MODE === 'DEVELOPMENT'
    ? process.env.REACT_APP_LOCAL_PROTOCOL
    : process.env.REACT_APP_PROTOCOL;
const BASE_URL = `${BASE_HTTP_PROTOCOL}://${
  process.env.REACT_APP_MODE === 'DEVELOPMENT'
    ? process.env.REACT_APP_LOCAL_ENDPOINT
    : process.env.REACT_APP_ENDPOINT
}`;

const DEFAULT_HEADERS = {
  Authorization: `Bearer ${localStorage.getItem('token')}`,
  'Content-Type': 'application/json',
  Accept: 'application/json',
};

/**
 * Base Get Request
 * @param  {string} url
 * @param  {Headers} headers=DEFAULT_HEADERS
 */
export const get = (url, headers = DEFAULT_HEADERS) => {
  return axios.get(BASE_URL + url, {
    headers,
  });
};

/**
 * @param  {string} url
 * @param  {any} data
 * @param  {Headers} headers=DEFAULT_HEADERS
 */
export const post = (url, data, headers = DEFAULT_HEADERS) => {
  return axios.post(BASE_URL + url, data, { headers });
};

/**
 * @param  {} url
 * @param  {} data
 * @param  {} headers=DEFAULT_HEADERS
 */
export const put = (url, data, headers = DEFAULT_HEADERS) => {
  return axios.put(BASE_URL + url, data, {
    headers,
  });
};

/**
 * @param  {} url
 * @param  {} data
 * @param  {} headers=DEFAULT_HEADERS
 */
function deleteRequest(url, data, headers = DEFAULT_HEADERS) {
  return axios.delete(BASE_URL + url, data, {
    headers,
  });
}

export { deleteRequest as delete };
