import React, { useState, useRef, useEffect } from 'react';
import { chartData } from '../../../api/global';
import { Waypoint } from 'react-waypoint';
// import { Line } from 'react-chartjs-2';
import Chartjs from 'chart.js';

const chartConfig = {
  type: 'line',
  data: {
    labels: [],
    lineTension: 0.5,
    xAxisID: 'Days',
    yAxisID: 'No. of Cases',
    datasets: [
      {
        label: 'Confirmed',
        data: [],
        spanGaps: false,
        lineTension: 0.6,
        backgroundColor: ['rgba(101, 192, 235, 0.4)'],
        borderColor: ['rgba(101, 192, 235, 0.5)'],
        pointRadius: 2,
        pointBackgroundColor: 'rgba(101, 192, 235, 1)',
        pointBorderColor: 'rgba(101, 192, 235, 1)',
        borderWidth: 3,
      },
      {
        label: 'Deaths',
        data: [],
        backgroundColor: ['rgba(218, 24, 64, 1)'],
        borderColor: ['rgba(218, 24, 64, 0.5)'],
        pointRadius: 2,
        pointBackgroundColor: 'rgba(218, 24, 64, 1)',
        pointBorderColor: 'rgba(218, 24, 64, 1)',
        borderWidth: 3,
      },
    ],
  },
  options: {
    legend: {
      labels: {
        fontColor: 'black',
      },
    },
    title: {
      display: true,
      fontColor: 'black',
      text: 'Analysis',
    },
    scales: {
      xAxes: [
        {
          ticks: {
            fontColor: 'black',
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            fontColor: 'black',
          },
          gridLines: {
            color: 'rgba(0, 0, 0, 1)',
          },
        },
      ],
    },
  },
};

const Chart = () => {
  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
      setChartInstance(newChartInstance);
    }
  }, [chartContainer]);

  const updateDataset = (confirm, deaths, labels) => {
    chartInstance.data.labels = labels;
    chartInstance.data.datasets[0].data = confirm;
    chartInstance.data.datasets[1].data = deaths;
    chartInstance.update();
  };

  const onButtonClick = async () => {
    const { datesArray, confirmedArray, deathsArray } = await chartData();
    updateDataset(confirmedArray, deathsArray, datesArray);
  };

  return (
    <div className='chart-container'>
      <Waypoint onEnter={onButtonClick} />
      {/* <Line data={chartConfig} /> */}
      <canvas ref={chartContainer} id='chart' />
    </div>
  );
};

export default Chart;
