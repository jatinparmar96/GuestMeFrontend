//@ts-check
import { SubmitButton } from '../Buttons/Buttons';

/**@type {React.FC<import('./LoginFormType').LoginFormProps>} */
export const LoginForm = (props) => {
  const { register, errors, handleSubmit, onSubmit } = props;
  return (
    <>
      <div>
        <label>Email*</label>
        <input type="text" {...register('email', { required: true })} />
        {errors.email?.type === 'required' && 'Email is required'}
        <label>Password*</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password?.type === 'required' && 'Password is required'}
        <label htmlFor="keep-loggedIn">
          <input type="checkbox" name="keep-loggedIn" id="keep-loggedIn" />
          Keep me logged in
        </label>
      </div>
      <div className="submitButtonContainer">
        <SubmitButton
          text="Log In"
          onClick={handleSubmit(onSubmit)}
        ></SubmitButton>
        <p>Forgot password</p>
      </div>
    </>
  );
};
