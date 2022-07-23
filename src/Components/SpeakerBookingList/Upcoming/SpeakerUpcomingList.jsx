import style from '.././SpeakerBookingList.module.scss';
import { convertDateFormat } from '../../../Utils/Utils';
import { useEffect, useState } from 'react';
import { ReactComponent as DownArrow } from '../../../assets/icons/down-arrow.svg';
import { ReactComponent as UpArrow } from '../../../assets/icons/up-arrow.svg';
import { ReactComponent as Cancel } from '../../../assets/icons/cancel-delete.svg';
import OrganizationDetails from '../../OrganizationDetails/OrganizationDetails';

const SpeakerUpcomingList = (props) => {
  const [bookingDataOrganization, setBookingDataOrganization] = useState([]);
  const [arrowForOrg, setArrowForOrg] = useState(true);

  let arrowDecider = <></>;
  if (arrowForOrg) {
    arrowDecider = <DownArrow />;
  } else {
    arrowDecider = <UpArrow />;
  }

  const organizationData = (id) => {
    setArrowForOrg(!arrowForOrg);
    bookingDataOrganization[id] = !bookingDataOrganization[id];
    setBookingDataOrganization([...bookingDataOrganization]);
  };
  // console.log(count);

  useEffect(() => {
    if (props.speaker?.accepted) {
      const acceptedLength = props.speaker.accepted.length;
      let acceptedArray = [];
      for (let i = 0; i < acceptedLength; i++) {
        acceptedArray.push(false);
      }

      // console.log(acceptedArray);
      setBookingDataOrganization(acceptedArray);
    }
  }, [props.speaker]);

  return (
    <>
      <div className={style.upcoming}>
        <h3>Upcoming</h3>

        {props.speaker?.accepted && (
          <ul>
            {props.speaker.accepted.map((booking, id) => (
              <li key={id}>
                {/* <p>{ booking.location}</p> */}
                <div className={style.eachCard}>
                  <div className={style.verticalGrid}>
                    <div className={style.forBorderDiv}>
                      <p className={style.mintBlueText}>Will be on</p>
                      <p className={style.date}>
                        {convertDateFormat(booking.bookingDateTime.date)}
                      </p>
                    </div>

                    <div className={style.forBorderDivSecondSection}>
                      <div className={style.centreColumnTopRow}>
                        <p className={style.mintBlueText}>Request from</p>
                        <p className={style.sentAt}>
                          sent at {convertDateFormat(booking.createdAt)}
                        </p>
                      </div>
                      <p onClick={(e) => organizationData(id)}>
                        <span className={style.organizationName}>
                          {booking.organization.name}
                        </span>{' '}
                        {arrowDecider}
                      </p>
                      <div className={style.organizationData}>
                        {bookingDataOrganization[id] ? (
                          <OrganizationDetails
                            booking={booking}
                            organizationData={organizationData}
                            id={id}
                          />
                        ) : (
                          ''
                        )}
                      </div>
                    </div>

                    <div className={`${style.callToActionColumn}`}>
                      <p className={style.cancel}>
                        <Cancel />
                      </p>
                    </div>
                  </div>
                </div>
                <div className={style.organizationDataDesktop}>
                  {bookingDataOrganization[id] ? (
                    <OrganizationDetails
                      booking={booking}
                      organizationData={organizationData}
                      id={id}
                    />
                  ) : (
                    ''
                  )}
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SpeakerUpcomingList;
