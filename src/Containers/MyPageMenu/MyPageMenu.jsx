import { NavLink, useNavigate } from 'react-router-dom';
import { RequestButtonWide } from '../../Components/Buttons/Buttons';
import ScreenWidth from '../../Components/ScreenSize/ScreenSize';
import style from './MyPageMenu.module.scss';
import { SpeakerMenu } from './SpeakerMenu';


const MyPageMenu = (props) => {
  const screen = ScreenWidth();
  const navigate = useNavigate();
  const id = JSON.parse(localStorage.getItem('user')).id;

  let activeStyle;
  if (screen > 992) {
    activeStyle = {
      borderRight: '8px solid #35AFAC',
    };
  } else {
      activeStyle = {
        borderBottom: '3px solid #35AFAC',
        marginBottom: '-5px'
      };

  }





  return (
    <>
      <section className={style.myPageMenu}>
      <h2>Menu</h2>
      <div className={style.myPageMenuContainer}>
        {
            SpeakerMenu.map((link, index) => {
              return (


              <NavLink
                to={link.path}
                style={({ isActive }) => isActive ? activeStyle : undefined}
                className={style.myPageMenuLink}

              >

                  <span>{link.icon}</span>
                  <span>{link.title}</span>
              </NavLink>

          )

            })
        }

        </div>
        {screen > 992 ? (
          <div className={style.button}>
              <RequestButtonWide
                text="Preview your profile"
                onClick={() => navigate('/speakers/' + id)}
            />
          </div>
          ) : null}
        </section>
    </>

  );
}

export default MyPageMenu;