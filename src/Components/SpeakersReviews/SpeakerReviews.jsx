import ShowMore from '../ShowMore/ShowMore';

const SpeakerReviews = (props) => {

    return (
      <>
        <div>
          <section className='profileReviews'>
            <h4>Reviews ({props.speaker.reviewsQuantity})</h4>
            <div className='reviewsContainer'>
              {props.speaker.reviews.map((review, index) =>
                <div key={index}>
                  <p>{new Date(review.createdAt).toLocaleDateString('en-us', { year: "numeric", month: "long", day: "numeric" })}</p>
                  <div className='reviewContainer'>
                    <h5>{review.organization.name}</h5>
                    {/* {TODO: update length} */}
                    <p>{review.comment.length > 5 ?
                      <>
                      { review.comment.substring(0, 5) }
                        < ShowMore review={review.comment } />
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