import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { RequestButtonWide } from '../../Components/Buttons/Buttons';
import ScreenWidth from '../../Components/ScreenSize/ScreenSize';
import ShowMore from '../../Components/ShowMore/ShowMore';
import style from './BookingSpeakerCard.module.scss';

const BookingSpeakerCard = (props) => {
  const width = ScreenWidth();

  const navigate = useNavigate();
  return (
    <>
      {width > 992 ? (
        <aside className={style.speakerCard}>
          <h2>Request to</h2>
          <figure>
            <img
              src={props.speaker.profilePicture}
              alt={`${props.speaker.fullName}`}
            />
          </figure>
          <h3>{props.speaker.fullName}</h3>
          <p className={style.tagline}>{props.speaker.tagline}</p>
          <div>
            <h4>Areas of expertise</h4>
            <p>{props.speaker.conditions.areas.join(', ')}</p>
          </div>
          <div>
            <h4>Price per hour</h4>
            <p>{props.speaker.conditions.price}</p>
          </div>
          <div>
            <h4>Delivery method</h4>

            {props.speaker.conditions.isInPerson ? (
              props.speaker.conditions.isOnline ? (
                <p>In Person/Online</p>
              ) : (
                <p>In Person</p>
              )
            ) : (
              <p>Online</p>
            )}
          </div>
          <div>
            <h4>Language</h4>
            <p>{props.speaker.conditions.language.join(', ')}</p>
          </div>
          <div>
            <h4>Location</h4>
            <p>{props.speaker.location}</p>
          </div>
          <div className={style.button}>
            <RequestButtonWide
              text="Go back to profile"
              onClick={() => navigate('/speakers/' + props.speaker.id)}
            />
          </div>
        </aside>
      ) : (
        <aside className={style.speakerCard}>
          <h2>Request to</h2>
          <figure>
            <img
              src={props.speaker.profilePicture}
              alt={`${props.speaker.fullName}`}
            />
          </figure>
          <h3>{props.speaker.fullName}</h3>
          <p className={style.tagline}>{props.speaker.tagline}</p>
          <div className={style.more}>
            <ShowMore
              more={
                <Fragment>
                  <div>
                    <h4>Areas of expertise</h4>
                    <p>{props.speaker.conditions.areas.join(', ')}</p>
                  </div>
                  <div>
                    <h4>Price per hour</h4>
                    <p>{props.speaker.conditions.price}</p>
                  </div>
                  <div>
                    <h4>Delivery method</h4>

                    {props.speaker.conditions.isInPerson ? (
                      props.speaker.conditions.isOnline ? (
                        <p>In Person/Online</p>
                      ) : (
                        <p>In Person</p>
                      )
                    ) : (
                      <p>Online</p>
                    )}
                  </div>
                  <div>
                    <h4>Language</h4>
                    <p>{props.speaker.conditions.language.join(', ')}</p>
                  </div>
                  <div>
                    <h4>Location</h4>
                    <p>{props.speaker.location}</p>
                  </div>
                </Fragment>
              }
            ></ShowMore>
          </div>
        </aside>
      )}
    </>
  );
};

export default BookingSpeakerCard;
