//@ts-check
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginSpeaker } from '../../Api/Speaker.service';
import { AuthError } from '../../Errors/AuthError';
import tokenAtom from '../../Recoil/Authentication/index';
import { SubmitButton } from '../Buttons/Buttons';

export const SpeakerLoginForm = (props) => {
  const [, setToken] = useRecoilState(tokenAtom);

  let navigate = useNavigate();
  let location = useLocation();

  // @ts-ignore
  let from = location.state?.from?.pathname || '/';

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await loginSpeaker(data);
      if (response.error) {
        throw new AuthError(response.error);
      }

      if (response.data === undefined) {
        throw new AuthError('Auth failed, token is undefined');
      }
      setToken(response.data.token);
      navigate(from, { replace: true });
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
