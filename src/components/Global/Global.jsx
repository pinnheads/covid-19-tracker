import React, { useState } from 'react';
import { globalData } from '../../api/global';
import { Waypoint } from 'react-waypoint';
import Card from './Cards/Cards';

export default function Global() {
  var [globalStats, setGlobalStats] = useState({
    newConfirmed: 0,
    totalConfirmed: 0,
    confirmedInc: 0,
    newDeaths: 0,
    totalDeaths: 0,
    deathsInc: 0,
    newRecovered: 0,
    totalRecovered: 0,
    recoveredInc: 0,
  });

  function calculateIncrease(total, increase) {
    var result = (increase / total) * 100;
    return Number.parseFloat(result).toFixed(2);
  }

  async function getGlobalData() {
    const {
      NewConfirmed: newCon,
      TotalConfirmed: totCon,
      NewDeaths: newDea,
      TotalDeaths: totDea,
      NewRecovered: newRec,
      TotalRecovered: totRec,
    } = await globalData();
    setGlobalStats(() => {
      return {
        newConfirmed: newCon,
        totalConfirmed: totCon,
        confirmedInc: calculateIncrease(totCon, newCon),
        newDeaths: newDea,
        totalDeaths: totDea,
        deathsInc: calculateIncrease(totDea, newDea),
        newRecovered: newRec,
        totalRecovered: totRec,
        recoveredInc: calculateIncrease(totRec, newRec),
      };
    });
  }

  console.log(globalStats);
  return (
    <div>
      <Waypoint onEnter={getGlobalData} />
      <div style={{ display: 'flex' }}>
        <Card
          heading='Confirmed'
          total={globalStats.totalConfirmed}
          increase={globalStats.newConfirmed}
          percentIncrease={globalStats.confirmedInc}
        />
        <Card
          heading='Deaths'
          total={globalStats.totalDeaths}
          increase={globalStats.newDeaths}
          percentIncrease={globalStats.deathsInc}
        />
        <Card
          heading='Recovered'
          total={globalStats.totalRecovered}
          increase={globalStats.newRecovered}
          percentIncrease={globalStats.recoveredInc}
        />
      </div>
    </div>
  );
}
