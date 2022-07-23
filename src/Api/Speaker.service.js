import {
  getAuthInformationFromLocalStorage,
  setAuthInformation,
} from '../Utils/Utils';
import { get, post } from './api';

const BASE_ENDPOINT = '/speakers';

const SPEAKER_ENDPOINT = {
  get: `${BASE_ENDPOINT}`,
  login: `${BASE_ENDPOINT}/login`,
  register: `${BASE_ENDPOINT}/register`,
  update: `${BASE_ENDPOINT}/update/profile`,
  getMaxPrice: `${BASE_ENDPOINT}/max-price`,
  getAvailability: `${BASE_ENDPOINT}/get-availability`,
  getSpeakerBookings: `${BASE_ENDPOINT}/bookings`,
  randomSpeakers: `${BASE_ENDPOINT}/random-speakers`,
};
/**
 * @param  {string} params
 */
export const getSpeakers = (params, page) => {
  return get(
    `${SPEAKER_ENDPOINT.get}${params ? `?${params}` : ''}${
      page ? `&page=${page}` : ''
    }`
  );
};

/**
 * @param  {string} id
 */
export const getSpeaker = (id) => {
  return get(SPEAKER_ENDPOINT.get + `/${id}`);
};

export const loginSpeaker = async (loginData) => {
  try {
    const { data, status } = await post(SPEAKER_ENDPOINT.login, loginData);
    const result = setAuthInformation(data.token, data.user, 'speaker');
    if (result) {
      console.log('storage: ', getAuthInformationFromLocalStorage('user'));
      console.log('Login success, your token has been saved as:');
      console.log(data.token);
    }
    return { data, status };
  } catch (error) {
    return { error };
  }
};

/**
 *
 * @param {import('./ApiType').RegisterSpeakerData} registerData
 * @returns {import('./ApiType').RegisterSpeakerResponse}
 */
export const registerSpeaker = async (registerData) => {
  try {
    const { data, status } = await post(
      SPEAKER_ENDPOINT.register,
      registerData
    );
    const result = setAuthInformation(data.token, data.user, 'speaker');
    if (result) {
      console.log('storage: ', getAuthInformationFromLocalStorage('user'));
      console.log('Login success, your token has been saved as:');
      console.log(data.token);
    }
    return { data, status };
  } catch (error) {
    return { error };
  }
};

export const getMaxPrice = () => {
  return get(`${SPEAKER_ENDPOINT.getMaxPrice}`);
};

/**
 * Get Availability Array for Speaker
 * @param  {Speaker} id
 * @return {Promise<Array<String>>}
 */
export const getSpeakerAvailability = (id) => {
  return get(`${SPEAKER_ENDPOINT.getAvailability}/${id}`);
};

export const getSpeakerBookings = (id) => {
  return get(`${SPEAKER_ENDPOINT.getSpeakerBookings}/${id}`);
};

export const getRandomSpeakers = () => {
  return get(SPEAKER_ENDPOINT.randomSpeakers);
};

export const updateSpeakerProfile = (data) => {
  return post(SPEAKER_ENDPOINT.update, data);
};
