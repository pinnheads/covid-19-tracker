import axios from 'axios';

const globalUrl = 'https://covid19.mathdro.id/api';
const summaryUrl = 'https://covid19.mathdro.id/api/daily';

export const globalData = async () => {
  try {
    // Get global data
    const responseGlobal = await axios.get(globalUrl);
    // Get daily summary
    const summaryResponse = await axios.get(summaryUrl);
    const lastRecordedData =
      summaryResponse.data[summaryResponse.data.length - 1];
    const {
      confirmed: { total: lastConfirmed },
      deaths: { total: lastDeaths },
    } = lastRecordedData;

    // Return data
    const {
      confirmed: { value: totalConfirmed },
      recovered: { value: totalRecovered },
      deaths: { value: totalDeaths },
      lastUpdate,
    } = responseGlobal.data;

    const date = lastUpdate.substring(0, 10);
    const time = lastUpdate.substring(11, lastUpdate.length - 8);
    const newConfirmed = totalConfirmed - lastConfirmed;
    const newDeaths = totalDeaths - lastDeaths;
    return {
      totalConfirmed,
      newConfirmed,
      totalRecovered,
      newDeaths,
      totalDeaths,
      date,
      time,
    };
  } catch (error) {
    return error;
  }
};

export const chartData = async () => {
  try {
    const summaryResponse = await axios.get(summaryUrl);
    const datesArray = [];
    const confirmedArray = [];
    const deathsArray = [];
    const data = summaryResponse.data;
    for (let i = 0; i < data.length; i += 2) {
      confirmedArray.push(data[i].totalConfirmed);
      deathsArray.push(data[i].deaths.total);
      datesArray.push(data[i].reportDate);
    }
    return { datesArray, confirmedArray, deathsArray };
  } catch (error) {
    return error;
  }
};
