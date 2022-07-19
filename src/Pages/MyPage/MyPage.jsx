import { Outlet, useNavigate } from 'react-router-dom';
import { RequestButtonWide } from '../../Components/Buttons/Buttons';
import ScreenWidth from '../../Components/ScreenSize/ScreenSize';
import MyPageMenu from '../../Containers/MyPageMenu/MyPageMenu';
import style from './MyPage.module.scss';

const MyPage = () => {
  const id = JSON.parse(localStorage.getItem('user')).id;
  const navigate = useNavigate();
  const screen = ScreenWidth();

  return (
    <>
      <section className={style.myPage}>
        <div>
          <MyPageMenu />
          {screen > 992 ? (
            <RequestButtonWide
              text="Preview your profile"
              onClick={() => navigate('/speakers/' + id)}
            />
          ) : null}
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default MyPage;
