import { Outlet } from 'react-router-dom';
import MyPageMenu from '../../Containers/MyPageMenu/MyPageMenu';
import style from './MyPage.module.scss';

const MyPage = () => {


  return (
    <>
      <section className={style.myPage}>
        <div>
          <MyPageMenu />
        </div>
        <div className={style.outlet}>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default MyPage;
