import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import MyPageMenu from '../../Containers/MyPageMenu/MyPageMenu';
import style from './MyPage.module.scss';


const MyPage = () => {


  return (
    <>
      <Helmet>
        <title>GUEST ME - My Page</title>
      </Helmet>
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
