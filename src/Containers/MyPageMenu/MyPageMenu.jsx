import { NavLink } from 'react-router-dom';
import style from './MyPageMenu.module.scss';
import { SpeakerMenu } from './SpeakerMenu';
const MyPageMenu = (props) => {




  return (
    <>
      <section>
      <h2>Menu</h2>
      <div className={style.myPageMenu}>
        {
            SpeakerMenu.map((link, index) => {
            return(
              <div key={index}>
                <NavLink to={link.path}>
                  <span>{link.icon}</span>
                  <span>{link.title}</span>
                </NavLink>
                </div>
          )

            })
        }

        </div>
        </section>
    </>

  );
}

export default MyPageMenu;