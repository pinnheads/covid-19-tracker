import axios from 'axios';

const countryUrl = 'https://covid19.mathdro.id/api/countries';

export const countries = async () => {
  const response = await axios.get(countryUrl);

  var country = [];
  const { countries: data } = response.data;
  data.forEach((point) => {
    country.push({
      value: point.name,
      label: point.name,
    });
  });
  console.log(country);
  return country;
};
