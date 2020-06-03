import axios from 'axios';

export const countryData = async (country) => {
  const { country: pickedCountry } = country;
  const response = await axios.get(
    `https://covid19.mathdro.id/api/countries/${pickedCountry}`
  );
  const {
    confirmed: { value: confirmedCases },
    deaths: { value: totalDeaths },
    recovered: { value: totalRecoveries },
    lastUpdate,
  } = response.data;
  const date = lastUpdate.substring(0, 10);
  const time = lastUpdate.substring(11, lastUpdate.length - 8);
  return { confirmedCases, totalDeaths, totalRecoveries, date, time };
};
