// import { style } from '@mui/system';
import { useState } from 'react';
import arrow from '../../assets/icons/arrow.png';
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
      <div onClick={toggleShowMore} className={style.showMore}>
        {!showMore ?
          <span className={style.more}>Show more  <img src={arrow} alt="show more"></img></span>
          : <span className={style.less}>Show less  <img src={arrow} alt="show less"></img></span>
        }
          </div>
      </>
    );
}

export default ShowMore;