// @ts-check
import { useForm } from 'react-hook-form';
import { useRecoilState } from 'recoil';
import { registerOrganization } from '../../../Api/Organization.service';
import { SubmitButton } from '../../../Components/Buttons/Buttons';
import { AuthError } from '../../../Errors/AuthError';
import tokenAtom from '../../../Recoil/Authentication/index';
import styles from '../RegisterContainer.module.scss';

export const OrganizationRegisterContainer = () => {
  const [, setToken] = useRecoilState(tokenAtom);

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
      <div className={styles.registerContainer}>
        <h3>Registration Form for the Organization</h3>
        <p>
          Please fill out the form below, and click on 'Submit' button to
          Register with GUESTme.
        </p>
        <div className={styles.form}>
          <div className={styles.nameFiled}>
            <div className={styles.inputField}>
              <label>Organization Name</label>
              <input
                type="text"
                {...register('organizationName', { required: true })}
              />
            </div>
            <div className={styles.inputField}>
              <label>Phone</label>
              <input type="phone" {...register('phone', { required: true })} />
            </div>
          </div>
          <div className={styles.inputField}>
            <label>Email</label>
            <input type="text" {...register('email', { required: true })} />
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
            <SubmitButton text="Register" onClick={handleSubmit(onSubmit)} />
          </div>
        </div>
      </div>
    </>
  );
};
