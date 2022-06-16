//@ts-check
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { loginSpeaker } from '../../Api/Speaker.service';
import { SubmitButton } from '../../Components/SubmitButton/SubmitButton';
import { AuthError } from '../../Errors/AuthError';
import tokenAtom from '../../Recoil/Authentication/index';

export const SpeakerLoginForm = (props) => {
  const [, setToken] = useRecoilState(tokenAtom);

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
