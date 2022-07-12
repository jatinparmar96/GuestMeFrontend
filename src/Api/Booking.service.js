import { get, post } from './api';

const BASE_ENDPOINT = '/bookings';

const BOOKING_ENDPOINT = {
  get: `${BASE_ENDPOINT}`,
  post: `${BASE_ENDPOINT}`,
  setBookingStatus: `${BASE_ENDPOINT}/set-booking`,
};

/**
 * @param  {string} params
 */
export const getBookings = (params) => {
  return get(`${BOOKING_ENDPOINT.get}${params ? `?${params}` : ''}`);
};

/**
 *
 * @param {import('./ApiType').BookingData} bookingData
 * @returns {import('./ApiType').BookingResponse}
 */
export const postBooking = async (bookingData) => {
  post(BOOKING_ENDPOINT.post, bookingData)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const bookingResponse = async (bookingStatus, bookingID) => {
  // console.log(`${BOOKING_ENDPOINT.setBookingStatus}/${bookingID}`);
  post(`${BOOKING_ENDPOINT.setBookingStatus}/${bookingID}`, bookingStatus)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => {
      console.log(err);
    });
};
