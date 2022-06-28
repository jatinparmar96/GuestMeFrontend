import { useState } from 'react';

const ShowMore = (props) => {
  const [ showMore, setShowMore ] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  }
  return (

    <>

      {showMore ?
        props.review : null}
      <span onClick={toggleShowMore}>
      {!showMore ?
          "Show more..." : "Show less"}
      </span>
      </>
    );
}

export default ShowMore;