import {
  getAuthInformationFromLocalStorage,
  setAuthInformation,
} from '../Utils/Utils';
import { get, post } from './api';

const BASE_ENDPOINT = '/organizations';

const ORGANIZATION_ENDPOINT = {
  get: `${BASE_ENDPOINT}`,
  login: `${BASE_ENDPOINT}/login`,
  register: `${BASE_ENDPOINT}/register`,
};

/**
 * @param  {string} id
 */
export const getOrganization = (id) => {
  return get(ORGANIZATION_ENDPOINT.get + `/${id}`);
};

export const loginOrganization = async (loginData) => {
  try {
    const { data, status } = await post(ORGANIZATION_ENDPOINT.login, loginData);
    const result = setAuthInformation(data.token, data.user, 'organization');
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
 * @param {import('./ApiType').RegisterOrganizationData} registerData
 * @returns {import('./ApiType').RegisterOrganizationResponse}
 */
export const registerOrganization = async (registerData) => {
  try {
    const { data, status } = await post(
      ORGANIZATION_ENDPOINT.register,
      registerData
    );
    const result = setAuthInformation(data.token, 'speaker');
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
