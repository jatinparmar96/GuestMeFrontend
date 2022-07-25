import { RequestButton, RequestButtonMobile, SaveButton, SaveButtonMobile } from '../../Components/Buttons/Buttons';
import ScreenWidth from '../ScreenSize/ScreenSize';
import style from './SpeakerAccount.module.scss';
const SpeakerAccount = () => {
  const width = ScreenWidth();

  return (
    <>
      <div className={style.speakerAccount}>
        <h3>Account</h3>
        <p className={style.warning}>Information here will not be published</p>
        <form>
          <label className={style.email}>
            Email
            <input className={style.blockDisplay} type="email" />
          </label>
          <div className={style.password}>
          <label >
            Password
            <input className={style.blockDisplay} type="password" />
          </label>
            <span>Change password</span>
          </div>
          <label className={style.location}>
            Location
            <input className={style.blockDisplay} type="text" />
          </label>
          <label className={style.phone}>
            Phone
            <input className={style.blockDisplay} type="text" />
          </label>
          {width > 992 ?
          (<div className={style.buttonsContainer}>

            <RequestButton
              text="Save"
              // onClick={() => navigate()}
            />
            <SaveButton
              text="Delete account"
            // onClick={}
            />

          </div>)
          :
          (<div className={style.buttonsContainer}>

            <RequestButtonMobile
              text="Save"
              // onClick={() => navigate()}
            />
            <SaveButtonMobile
              text="Delete account"
            // onClick={}
            />

          </div>)}

        </form>
      </div>
    </>
  );
}

export default SpeakerAccount;