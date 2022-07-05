//@ts-check
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SubmitButton } from '../../Buttons/Buttons';
import style from './LoginForm.module.scss';

/**@type {React.FC<import('./LoginFormType').LoginFormProps>} */
export const LoginForm = (props) => {
  const { register, errors, handleSubmit, onSubmit } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      <div className={style.formContainer}>
        <div className={style.inputRow}>
          <label>Email*</label>
          <input type="text" {...register('email', { required: true })} />
          {errors.email?.type === 'required' && 'Email is required'}
        </div>
        <div className={style.inputRow}>
          <label>Password*</label>
          <div className={style.passwordRow}>
            <input
              className={style.inputPassword}
              type={passwordVisible ? 'text' : 'password'}
              {...register('password', { required: true })}
            />
            <input
              type="checkbox"
              name="visible"
              className={style.passwordVisibility}
              onChange={() => setPasswordVisible((prev) => !prev)}
            />
          </div>
          {errors.password?.type === 'required' && 'Password is required'}
        </div>
        <label htmlFor="keep-loggedIn" className={style.keepLogin}>
          <input type="checkbox" name="keep-loggedIn" id="keep-loggedIn" />
          <span>Keep me logged in</span>
        </label>
      </div>
      <div className={style.buttonContainer}>
        <SubmitButton
          text="Log In"
          onClick={handleSubmit(onSubmit)}
        ></SubmitButton>
      </div>
      <Link to="forgot" className={style.forgotPassword}>
        Forgot password
      </Link>
    </>
  );
};
