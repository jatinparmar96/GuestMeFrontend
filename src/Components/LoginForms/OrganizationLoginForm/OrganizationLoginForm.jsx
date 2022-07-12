//@ts-check
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginOrganization } from '../../../Api/Organization.service';
import { AuthError } from '../../../Errors/AuthError';
import tokenAtom from '../../../Recoil/Authentication/index';
import { LoginForm } from '../LoginForm/LoginForm';

import style from '../LoginForms.module.scss';

export const OrganizationLoginForm = (props) => {
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
      const response = await loginOrganization(data);
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
    <div className={style.loginformContainer}>
      <div className={style.formContainer}>
        <div className={style.formHeading}>
          <h2>Log in form for an organization</h2>
          <p>Please enter your email and password.</p>
        </div>
        <LoginForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
        <p>
          <span>
            Don't have an account?
            <Link to="/register" className={style.registerLink}>
              Register as an organization
            </Link>
          </span>
        </p>
      </div>
      <div className={style.aside}>
        <img
          src="https://picsum.photos/id/1/200/300"
          alt="login"
          className={style.img}
        />
      </div>
    </div>
  );
};