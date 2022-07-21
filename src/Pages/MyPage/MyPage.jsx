import { Outlet } from 'react-router-dom';
import MyPageMenu from '../../Containers/MyPageMenu/MyPageMenu';
import { Helmet } from 'react-helmet-async';
import style from './MyPage.module.scss';

const MyPage = () => {


  return (
    <>
      <Helmet>
        <title>GUEST ME - My Page</title>
      </Helmet>
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
