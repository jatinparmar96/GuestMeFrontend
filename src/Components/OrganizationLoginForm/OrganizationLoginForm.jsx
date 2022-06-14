import { useForm } from 'react-hook-form';

export const OrganizationLoginForm = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log('data: ', data);

    //@TODO: fetch Register API
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label>Email:</label>
        <input type="text" {...register('email', { required: true })} />
        {errors.email?.type === 'required' && 'Email is required'}
        <label>Password:</label>
        <input type="password" {...register('password', { required: true })} />
        {errors.password?.type === 'required' && 'Password is required'}
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};
