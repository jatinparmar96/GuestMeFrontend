import howManySpeeches from '../../../assets/how-many-speeches.png';
import style from './Speeches.module.scss';

const Speeches = () => {
  return (
    <>
      <div className={style.speechesTextContainer}>
        <h2>
          How Many <span>Speeches?</span>
        </h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
          pharetra sem, ut convallis ex. Pellentesque ultrices turpis quis nibh
          placerat accumsan.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas eget
          pharetra sem, ut convallis ex.
        </p>
      </div>

      <img src={howManySpeeches} alt="how many speeches"></img>
      <div className="data-visualization"></div>
    </>
  );
};

export default Speeches;
