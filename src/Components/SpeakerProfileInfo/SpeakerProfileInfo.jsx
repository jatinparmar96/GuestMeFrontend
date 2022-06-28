

const SpeakerInfo = (props) => {





    return (
      <>
        <div>
          <section className='profileMainInfo'>
            <figure>
               <img src={props.speaker.profilePicture} alt={`${props.speaker.fullName}` } />
            </figure>
            <p className='reviewsQuantity'>{props.speaker.reviewsQuantity} Reviews</p>
            {/* TODO: Add star */}
            <h3>{props.speaker.fullName}</h3>
            <p className='tagline'>{ props.speaker.tagline}</p>
            <div>
              <h4>Areas of expertise</h4>
              <p>{props.speaker.conditions.areas.join(", ")}</p>
            </div>
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







          </section>

        </div>


        </>

    );
}

export default SpeakerInfo;