// @ts-check

import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import tokenAtom from '../../Recoil/Authentication/index';

import { SubmitButton } from '../../Components/SubmitButton/SubmitButton';
import { AuthError } from '../../Errors/AuthError';
import { API_URL } from '../../Utils/Constants';
import {
  getSpeakerInformationFromLocalStorage,
  setSpeakerInformation
} from '../../Utils/Utils';
import styles from './Register.module.scss';

export const Register = (props) => {
  const [token, setToken] = useRecoilState(tokenAtom);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  /**
   * TODO: Refactor Using service api
   * @param {*} data
   */
  const onSubmit = async (data) => {
    console.log('data: ', data);
    try {
      const res = await fetch(`${API_URL.SPEAKER_REGISTER}`, {
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
        console.log('Register success, your token has been saved as:');
        console.log(token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h3>Registration Form for the Speaker</h3>
      <p>
        Please fill out the form below, and click on 'Submit' button to Register
        with GUESTme.
      </p>
      <div className={styles.form}>
        <div className={styles.inputField}>
          <label>Email</label>
          <input type="text" {...register('email', { required: true })} />
        </div>

        <div className={styles.nameFiled}>
          <div className={styles.inputField}>
            <label>First Name</label>
            <input type="text" {...register('userName', { required: true })} />
          </div>
          <div className={styles.inputField}>
            <label>Last Name</label>
            <input
              type="text"
              {...register('userLastname', { required: true })}
            />
          </div>
        </div>

        {/* {errors.email?.type === "required" && "Password is required"} */}
        <div className={styles.inputField}>
          <label>Password</label>
          <input
            type="password"
            {...register('password', { required: true })}
          />
        </div>
        {/* {errors.password?.type === "required" && "Password is required"} */}
        <div className={styles.inputField}>
          <label>Confirm Password</label>
          <input
            type="password"
            {...register('confirmPassword', { required: true })}
          />{' '}
        </div>
        <div className={styles.submitBUttonContainer}>
          <SubmitButton text="Submit" onClick={handleSubmit(onSubmit)} />
        </div>
      </div>
    </div>
  );
};
