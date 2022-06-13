const BASE_HTTP_PROTOCOL = "http";
const BASE_URL = `${BASE_HTTP_PROTOCOL}://${process.env.REACT_APP_DOMAIN}`;

export const API_URL = {
  SPEAKER_LOGIN: `${BASE_URL}/speakers/login`,
  SPEAKER_REGISTER: `${BASE_URL}/speakers/register`,
};
