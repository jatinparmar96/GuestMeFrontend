// @ts-check
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { registerSpeaker } from '../../../Api/Speaker.service';
import { SubmitButton } from '../../../Components/Buttons/Buttons';
import Eyes from '../../../Components/eyes/Eyes';
import { AuthError } from '../../../Errors/AuthError';
import tokenAtom from '../../../Recoil/Authentication/index';
import style from '../RegisterContainer.module.scss';

/**@type {React.FC<any>} */
export const SpeakerRegisterContainer = (props) => {
  const [, setToken] = useRecoilState(tokenAtom);

  let navigate = useNavigate();

  /**@type {[boolean, React.Dispatch<boolean>]} */
  const [passwordVisible, setPasswordVisible] = useState(false);
  /**@type {[boolean, React.Dispatch<boolean>]} */
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const handleClickPasswordHidden = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleClickConfirmPasswordHidden = () => {
    setConfirmPasswordVisible(!confirmPasswordVisible);
  };

  const onSubmit = async (data) => {
    try {
      const response = await registerSpeaker(data);
      if (response.error) {
        throw new AuthError(response.error);
      }

      if (response.data === undefined) {
        throw new AuthError('Auth failed, token is undefined');
      }

      setToken({ name: response.data.user, value: response.data.token });
      navigate(/** @param{string} to */ '/speakers/mypage');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className={style.registerContainer}>
        <h3 className={style.contentHeading}>
          Registration Form for the Speaker
        </h3>
        <p className={style.description}>
          Please fill out the form below, and click register.
        </p>
        <div className={style.form}>
          <div className={style.nameFiled}>
            <div className={style.inputField}>
              <label className={style.label}>First Name*</label>
              <input
                type="text"
                className={style.input}
                placeholder="First"
                autoComplete="given-name"
                {...register('userName', { required: true })}
              />
            </div>
            <div className={style.inputField}>
              <label className={style.label}>Last Name*</label>
              <input
                type="text"
                className={style.input}
                placeholder="Last"
                autoComplete="family-name"
                {...register('userLastname', { required: true })}
              />
            </div>
          </div>
          <div className={style.inputField}>
            <label className={style.label}>Email*</label>
            <input
              type="email"
              className={style.input}
              autoComplete="email"
              placeholder="speaker@gmail.com"
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
