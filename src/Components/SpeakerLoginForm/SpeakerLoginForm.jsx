//@ts-check
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { SubmitButton } from '../../Components/SubmitButton/SubmitButton';
import { AuthError } from '../../Errors/AuthError';
import tokenAtom from '../../Recoil/Authentication/index';

import { API_URL } from '../../Utils/Constants';
import {
  getSpeakerInformationFromLocalStorage,
  setSpeakerInformation,
} from '../../Utils/Utils';

export const SpeakerLoginForm = (props) => {
  const [token, setToken] = useRecoilState(tokenAtom);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const res = await fetch(`${API_URL.SPEAKER_LOGIN}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (res.ok === false) {
        const error = await res.json();
        throw new AuthError(error.message);
      }
      const responseToken = (await res.json()).token;

      if (responseToken === undefined) {
        throw new AuthError('Auth failed, token is undefined');
      }
      setToken(responseToken);
      const result = setSpeakerInformation(responseToken);
      if (result) {
        console.log('storage: ', getSpeakerInformationFromLocalStorage());
        console.log('Login success, your token has been saved as:');
        console.log(token);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <div>
        <label>Email:</label>
        <input type="text" {...register('email', { required: true })} />
        {errors.email?.type === 'required' && 'Email is required'}
        <label>Password:</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password?.type === 'required' && 'Password is required'}
        <input type="submit" value="S" />
      </div>
      <div className="submitButtonContainer">
        <SubmitButton
          text="LogIn"
          onClick={handleSubmit(onSubmit)}
        ></SubmitButton>
      </div>
    </div>
  );
};
