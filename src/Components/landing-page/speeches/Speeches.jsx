import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { getBookingsByMonth } from '../../../Api/Booking.service';
import howManySpeeches from '../../../assets/how-many-speeches.png';

import style from './Speeches.module.scss';

const Speeches = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await getBookingsByMonth();
      setData(data);
    })();
  }, []);
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
      <div className={style.dataVisualizationContainer}>
        <div className={style.dataVisualization}>
          <Line
            options={{
              responsive: true,
              layout: {
                padding: 50,
              },
              scales: {
                y: {
                  beginAtZero: true,
                },
              },
            }}
            data={{
              labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
              ],
              datasets: [
                {
                  label: 'Number of Speeches',
                  data,
                  borderColor: '#35afac',
                },
              ],
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Speeches;
