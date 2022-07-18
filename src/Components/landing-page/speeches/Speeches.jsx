import { Line } from 'react-chartjs-2';
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

      <img
        className={style.speechesImage}
        src={howManySpeeches}
        alt="how many speeches"
      ></img>
      <div className={style.dataVisualization}>
        <Line
          data={{
            labels: [
              'January',
              'February',
              'March',
              'April',
              'May',
              'June',
              'July',
            ],
            datasets: [
              {
                label: 'Number of Speeches',
                data: [65, 59, 80, 81, 56, 55, 40],
                borderColor: '#35afac',
              },
            ],
          }}
        />
      </div>
    </>
  );
};

export default Speeches;
