import { AuthError } from '../Errors/AuthError';

export type RegisterSpeakerData = {
  userName: string;
  userLastname: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterSpeakerResponse = {
  data?: {
    token: string;
  };
  status?: number;
  error: AuthError;
};
