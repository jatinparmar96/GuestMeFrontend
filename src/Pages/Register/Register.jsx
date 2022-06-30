// @ts-check

import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import tokenAtom from '../../Recoil/Authentication/index';

import { SubmitButton } from '../../Components/Buttons/Buttons';
import { AuthError } from '../../Errors/AuthError';

import { registerSpeaker } from '../../Api/Speaker.service';

import styles from './Register.module.scss';

export const Register = (props) => {
  const [, setToken] = useRecoilState(tokenAtom);

  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  /**
   * @param {*} data
   */
  const onSubmit = async (data) => {
    try {
      const response = await registerSpeaker(data);
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
