import { NavLink } from 'react-router-dom';
import style from './MyPageMenu.module.scss';
import { SpeakerMenu } from './SpeakerMenu';
const MyPageMenu = (props) => {
  let activeStyle = {
    borderBottom: '3px solid #35AFAC',
    marginBottom: '-5px',
  };

  return (
    <>
      <section className={style.myPageMenu}>
        <h2>Menu</h2>
        <div className={style.myPageMenuContainer}>
          {SpeakerMenu.map((link, index) => {
            return (
              <NavLink
                key={index}
                to={link.path}
                style={({ isActive }) => (isActive ? activeStyle : undefined)}
              >
                <span>{link.icon}</span>
                <span>{link.title}</span>
              </NavLink>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MyPageMenu;
