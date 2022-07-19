import { Outlet, useNavigate } from 'react-router-dom';
import { RequestButtonWide } from '../../Components/Buttons/Buttons';
import MyPageMenu from '../../Containers/MyPageMenu/MyPageMenu';
import style from './MyPage.module.scss';

const MyPage = () => {
  const id = JSON.parse(localStorage.getItem('speaker')).id;
  const navigate = useNavigate();

  return (
    <>
      <section className={style.myPage}>
        <div>
          <MyPageMenu />
          <RequestButtonWide
            text="Preview your profile"
            onClick={() => navigate('/speakers/' + id)}
          />
        </div>
        <div>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default MyPage;
