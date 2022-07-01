import { OrganizationLoginForm } from '../../Components/OrganizationLoginForm/OrganizationLoginForm';
import { SpeakerLoginForm } from '../../Components/SpeakerLoginForm/SpeakerLoginForm';

export const Login = (props) => {
  const container =
    props.type !== 'organization' ? (
      <SpeakerLoginForm></SpeakerLoginForm>
    ) : (
      <OrganizationLoginForm></OrganizationLoginForm>
    );

  return <div>{container}</div>;
};
