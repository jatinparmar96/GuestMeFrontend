//@ts-check
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { loginOrganization } from '../../Api/Organization.service';
import { AuthError } from '../../Errors/AuthError';
import tokenAtom from '../../Recoil/Authentication/index';
import { LoginForm } from '../LoginForm/LoginForm';

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
    <div>
      <main>
        <h2>Log in form for an organization</h2>
        <p>Please enter your email and password.</p>
        <LoginForm
          handleSubmit={handleSubmit}
          onSubmit={onSubmit}
          register={register}
          errors={errors}
        />
        <p>
          <span>
            Don't have an account?
            <Link to="/register">Register as an organization</Link>
          </span>
        </p>
      </main>
      <aside>
        <img src="https://picsum.photos/id/1/200/300" alt="login" />
      </aside>
    </div>
  );
};
