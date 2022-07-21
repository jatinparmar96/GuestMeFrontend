import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import BreadCrumbs from '../../Components/breadCrumbs/BreadCrumbs';
import MyPageMenu from '../../Containers/MyPageMenu/MyPageMenu';
import style from './MyPage.module.scss';

const MyPage = () => {


  return (
    <>
      <Helmet>
        <title>GUEST ME - My Page</title>
      </Helmet>
      <BreadCrumbs currentPosition="My Page" />
      <div className={style.myPage}>
        <div className={style.menuSide}>
          <MyPageMenu />
        </div>
        <div className={style.outlet}>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default MyPage;
