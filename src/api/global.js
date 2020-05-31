import axios from 'axios';

const url = 'https://api.covid19api.com/summary';

export const globalData = async () => {
  try {
    const response = await axios.get(url);
    const data = response.data.Global;
    return data;
  } catch (error) {
    return error;
  }
};
