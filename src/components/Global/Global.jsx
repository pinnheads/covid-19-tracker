import React, { useState } from 'react';
import { globalData } from '../../api/global';
import { Waypoint } from 'react-waypoint';
import Chart from './Charts/Chart';
import styles from './Global.module.css';
import Card from './Cards/Cards';

export default function Global() {
  var [globalStats, setGlobalStats] = useState({
    newConfirmed: 0,
    totalConfirmed: 0,
    newDeaths: 0,
    totalDeaths: 0,
    totalRecovered: 0,
    lastUpdateDate: '',
    lastUpdateTime: '',
  });

  async function getGlobalData() {
    const {
      totalConfirmed: totCon,
      newConfirmed: newCon,
      totalRecovered: totRec,
      newDeaths: newDea,
      totalDeaths: totDea,
      date,
      time,
    } = await globalData();
    setGlobalStats(() => {
      return {
        newConfirmed: newCon,
        totalConfirmed: totCon,
        newDeaths: newDea,
        totalDeaths: totDea,
        totalRecovered: totRec,
        lastUpdateDate: date,
        lastUpdateTime: time,
      };
    });
  }

  return (
    <div>
      <Waypoint onEnter={getGlobalData} />
      <div className={styles.container}>
        <Card
          heading='Confirmed'
          total={globalStats.totalConfirmed}
          increase={globalStats.newConfirmed}
          date={globalStats.lastUpdateDate}
          time={globalStats.lastUpdateTime}
        />
        <Card
          heading='Deaths'
          total={globalStats.totalDeaths}
          increase={globalStats.newDeaths}
          date={globalStats.lastUpdateDate}
          time={globalStats.lastUpdateTime}
        />
        <Card
          heading='Recovered'
          total={globalStats.totalRecovered}
          date={globalStats.lastUpdateDate}
          time={globalStats.lastUpdateTime}
        />
      </div>

      <div>
        <Chart />
      </div>
    </div>
  );
}
