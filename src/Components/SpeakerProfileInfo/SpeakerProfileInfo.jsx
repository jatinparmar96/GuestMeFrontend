import { useNavigate } from 'react-router-dom';
import { RequestButton, SaveButton } from '../Buttons/Buttons';
import ScreenWidth from '../ScreenSize/ScreenSize';
import style from './SpeakerProfileInfo.module.scss';


const SpeakerInfo = (props) => {
  const width = ScreenWidth();
  const navigate = useNavigate();


    return (
      <>
        <div>
          <section className={style.profileMainInfo}>
            <figure>
               <img src={props.speaker.profilePicture} alt={`${props.speaker.fullName}` } />
            </figure>
            <div className={style.profileBasicInfo}>
              <div className={style.reviewsContainer}>
              <p className={style.reviewsQuantity}>{props.speaker.reviewsQuantity} reviews</p>
                <div className={style.star}></div>
              </div>
              {/* TODO: Add star */}
              <h2>{props.speaker.fullName}</h2>
              <p className={style.tagline}>{ props.speaker.tagline}</p>
              <div>
                <h4>Areas of expertise</h4>
                <p className={style.areas}>{props.speaker.conditions.areas.join(", ")}</p>
              </div>
            </div>
            <div className={style.profileAdditionalInfo}>
              <div>
                <h4>Price per hour</h4>
                <p>{props.speaker.conditions.price}</p>
              </div>
              <div>
                <h4>Delivery method</h4>

                  {props.speaker.conditions.isInPerson ?
                    (props.speaker.conditions.isOnline ?
                    <p>In Person/Online</p>
                    : <p>In Person</p>)
                  : <p>Online</p>
                  }

              </div>
              <div>
                <h4>Language</h4>
                <p>{props.speaker.conditions.language.join(", ")}</p>
              </div>
              <div>
                <h4>Location</h4>
                <p>{props.speaker.location}</p>
              </div>
              {width > 992 ? (
                <div className={style.buttonsContainer}>
                  <SaveButton
                    text="Save"
                  // onClick={}
                  />
                  <RequestButton
                    text="Request"
                    onClick={() => navigate('/speakers/' + props.speaker.id + '/request')}
                  />
                </div>)
                : null}
            </div>
          </section>

        </div>


        </>

    );
}

export default SpeakerInfo;