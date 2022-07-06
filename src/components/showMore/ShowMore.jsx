// import { style } from '@mui/system';
import { useState } from 'react';
import style from './ShowMore.module.scss';

const ShowMore = (props) => {
  const [ showMore, setShowMore ] = useState(false);
  const toggleShowMore = () => {
    setShowMore(!showMore);
  }
  return (

    <>

      {showMore ?
        props.more : null}
      <span onClick={toggleShowMore} className={style.showMore}>
      {!showMore ?
          "Show more" : "Show less"}
      </span>
      </>
    );
}

export default ShowMore;