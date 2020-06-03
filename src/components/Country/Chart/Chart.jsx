import React, { useState, useRef, useEffect } from 'react';
import { countryData } from '../../../api/countryData';
import Chartjs from 'chart.js';
import Card from '../Card-Mobile/Card';
import styles from './Chart.module.css';

const chartConfig = {
  type: 'doughnut',
  data: {
    labels: ['Total: ', 'Deaths: ', 'Recovered: ', 'Active: '],
    datasets: [
      {
        backgroundColor: ['#65C0EB', '#DC143C', '#53C95C', '#D4CB1E'],
        data: [],
      },
    ],
  },
  options: {
    title: {
      display: true,
      text: 'Select a country above and press "Get Data" to see the result',
      fontSize: 20,
      fontColor: 'black',
    },
    legend: {
      display: true,
      position: 'bottom',
      labels: {
        fontColor: 'black',
        fontSize: 15,
        padding: 15,
      },
    },
  },
};

const Chart = (props) => {
  const country =
    props.pickedCountry.length === 0 ? 'USA' : props.pickedCountry;
  const chartContainer = useRef(null);
  const [cardData, setCardData] = useState({});
  const [toShow, setToShow] = useState(true);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const updateDataset = (confirmed, recovered, deaths, date, time) => {
    const active = confirmed - (recovered + deaths);
    chartInstance.data.labels = [
      `Total: ${numberWithCommas(confirmed)} `,
      `Deaths: ${numberWithCommas(deaths)}`,
      `Recovered: ${numberWithCommas(recovered)}`,
      `Active: ${numberWithCommas(active)}`,
    ];
    chartInstance.options.title.text = `${country} data as of ${date} at ${time}`;
    chartInstance.data.datasets[0].data[0] = confirmed;
    chartInstance.data.datasets[0].data[1] = deaths;
    chartInstance.data.datasets[0].data[2] = recovered;
    chartInstance.data.datasets[0].data[3] = active;
    setCardData(() => {
      return {
        country: country,
        total: confirmed,
        deaths: deaths,
        recovered: recovered,
        active: active,
        date: date,
        time: time,
      };
    });
    setToShow(false);
    chartInstance.update();
  };

  const onButtonClick = async () => {
    const {
      confirmedCases,
      totalDeaths,
      totalRecoveries,
      date,
      time,
    } = await countryData({
      country,
    });
    updateDataset(confirmedCases, totalRecoveries, totalDeaths, date, time);
  };

  return (
    <div>
      <button onClick={onButtonClick} className={styles.button}>
        Get Data
      </button>
      <div className='doughnut-container'>
        <canvas ref={chartContainer} className={styles.doughnut} />
      </div>
      {toShow ? (
        ''
      ) : (
        <div className='card-mobile' id='mobile'>
          <Card props={cardData} />
        </div>
      )}
    </div>
  );
};

export default Chart;
