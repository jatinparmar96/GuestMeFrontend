//@ts-check
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Eyes from '../../../Components/eyes/Eyes';
import { SubmitButton } from '../../Buttons/Buttons';
import style from './LoginForm.module.scss';
/**@type {React.FC<import('./LoginFormType').LoginFormProps>} */
export const LoginForm = (props) => {
  const { register, errors, handleSubmit, onSubmit } = props;

  const [passwordVisible, setPasswordVisible] = useState(false);
  const handleClickPasswordHidden = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <>
      <div className={style.loginFormContainer}>
        <div className={style.inputRow}>
          <label className={style.loginLabel}>Email*</label>
          <input
            type="text"
            {...register('email', { required: true })}
            className={style.inputEmail}
          />
          {errors.email?.type === 'required' && 'Email is required'}
        </div>
        <div className={style.inputRow}>
          <label className={style.loginLabel}>Password*</label>
          <div className={style.passwordRow}>
            <input
              className={style.inputPassword}
              type={passwordVisible ? 'text' : 'password'}
              {...register('password', { required: true })}
            />
            <div className={style.eyeContainer}>
              <Eyes
                isVisible={passwordVisible}
                handleClick={handleClickPasswordHidden}
              />
            </div>
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
      <Link to="/login" className={style.forgotPassword}>
        Forgot password
      </Link>
    </>
  );
};
