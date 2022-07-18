import arrow from '../../assets/icons/arrow.png';
import ShowMore from '../ShowMore/ShowMore';
import style from './SpeakerReviews.module.scss';

const SpeakerReviews = (props) => {

    return (
      <>
        <div>
          <section className={style.profileReviews}>
            <div className={style.profileReviewsHeader}>
              <h4>Reviews ({props.speaker.reviewsQuantity})</h4>
              <div className={style.arrows}>
                <img className={style.arrowLeft} src={arrow} alt="arrow left" />
                <img className={style.arrowRight} src={arrow} alt="arrow right" />

              </div>
            </div>
            <div className={style.reviewsContainer}>
              {props.speaker.reviews.map((review, index) =>
                <div key={index} className={style.review}>
                  <p className={style.date}>{new Date(review.createdAt).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })}</p>
                  <div className={style.reviewContainer}>
                    <h5>{review.organization.name}</h5>
                    {/* {TODO: update length} */}
                    <p>{review.comment.length > 100 ?
                      <>
                      { review.comment.substring(0, 100) }
                        < ShowMore more={review.comment } />
                      </>
                      : review.comment}</p>


                  </div>

                </div>
              )}
            </div>

          </section>
        </div>
        </>
    );
}

export default SpeakerReviews;