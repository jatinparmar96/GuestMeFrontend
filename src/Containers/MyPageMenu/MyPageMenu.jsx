import { useNavigate } from 'react-router-dom';
import { RequestButtonWide } from '../../Components/Buttons/Buttons';
import style from './MyPageMenu.module.scss';

const MyPageMenu = (props) => {
const navigate = useNavigate();

  return (
    <>
      <div className={style.myPageMenu}>
        <ul>
          <li>My Info</li>
          <li>Bookings</li>
          <li>Availability</li>
          <li>Account</li>
        </ul>
      </div>

      <RequestButtonWide
              text="Preview your profile"
            onClick={() =>
              navigate('/speakers/' + props.id)
              // {`/speakers/${speaker.id}`
      }/>
    </>

  );
}

export default MyPageMenu;