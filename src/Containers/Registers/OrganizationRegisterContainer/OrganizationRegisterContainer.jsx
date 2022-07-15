// @ts-check
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { registerOrganization } from '../../../Api/Organization.service';
import { SubmitButton } from '../../../Components/Buttons/Buttons';
import Eyes from '../../../Components/eyes/Eyes';
import { AuthError } from '../../../Errors/AuthError';
import tokenAtom from '../../../Recoil/Authentication/index';
import style from '../RegisterContainer.module.scss';

export const OrganizationRegisterContainer = () => {
  const [, setToken] = useRecoilState(tokenAtom);

  /**@type {[boolean, React.Dispatch<boolean>]} */
  const [passwordVisible, setPasswordVisible] = useState(false);
  /**@type {[boolean, React.Dispatch<boolean>]} */
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleClickPasswordHidden = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClickConfirmPasswordHidden = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await registerOrganization(data);

      if (response.error) {
        throw new AuthError(response.error);
      }

      if (response.data === undefined) {
        throw new AuthError('Auth failed, token is undefined');
      }
      setToken({ name: 'token', value: response.data.token });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={style.registerContainer}>
        <h3 className={style.contentHeading}>
          Registration Form for the Organization
        </h3>
        <p className={style.description}>
          Please fill out the form below, and click register.
        </p>
        <div className={style.form}>
          <div className={style.nameFiled}>
            <div className={style.inputField}>
              <label className={style.label}>Organization Name*</label>
              <input
                type="text"
                className={style.input}
                autoComplete="organization"
                placeholder="Name"
                {...register('organizationName', { required: true })}
              />
            </div>
            <div className={style.inputField}>
              <label className={style.label}>Phone*</label>
              <input
                type="phone"
                className={style.input}
                placeholder="+1 012-345-6789"
                {...register('phone', { required: true })}
              />
            </div>
          </div>
          <div className={style.inputField}>
            <label className={style.label}>Email*</label>
            <input
              type="email"
              className={style.input}
              autoComplete="email"
              placeholder="organization@guestme.org"
              {...register('email', { required: true })}
            />
          </div>

          {/* {errors.email?.type === "required" && "Password is required"} */}
          <div className={style.inputField}>
            <label className={style.label}>Password*</label>
            <div className={style.passwordContainer}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                className={`${style.input} ${style.passwordField}`}
                placeholder="････････"
                {...register('password', { required: true })}
              />
              <div className={style.eyesContainer}>
                <Eyes
                  isVisible={passwordVisible}
                  handleClick={handleClickPasswordHidden}
                />
              </div>
            </div>
          </div>
          {/* {errors.password?.type === "required" && "Password is required"} */}
          <div className={style.inputField}>
            <label className={style.label}>Confirm Password*</label>
            <div className={style.passwordContainer}>
              <input
                type={confirmPasswordVisible ? 'text' : 'password'}
                className={`${style.input} ${style.passwordField}`}
                placeholder="････････"
                {...register('confirmPassword', { required: true })}
              />
              <div className={style.eyesContainer}>
                <Eyes
                  isVisible={confirmPasswordVisible}
                  handleClick={handleClickConfirmPasswordHidden}
                />
              </div>
            </div>
          </div>
          <div className={style.submitButtonContainer}>
            <SubmitButton text="Register" onClick={handleSubmit(onSubmit)} />
          </div>
          <div className={style.confirmAccount}>
            <p>Already have an account?</p>
            <Link to="/login" className={style.registerLink}>
              Log in
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
