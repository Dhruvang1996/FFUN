import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { getCars } from '../../services/clientApiService';

const BarChart = () => {
  const [carsList, setCarsList] = useState([]);
  const carChangeList = useSelector((state) => state.cars);
  useEffect(async () => {
    const allCars = await getCars();
    setCarsList([...allCars]);
  }, [carChangeList.cars]);

  const count = [carsList.filter((obj) => obj.status === 'Sold').length];
  count.push(carsList.length - count);
  return (
    <div>
      <Bar
        data={{
          labels: ['Sold', 'Live'],
          datasets: [{
            data: count,
            backgroundColor: ['lightBlue', 'lightBlue'],
            barThickness: 90,
          }],
        }}
        height={200}
        width={300}
        options={{
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
};

export default BarChart;
