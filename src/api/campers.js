import axios from 'axios';
import { apiBaseURL } from '../constants';

axios.defaults.baseURL = apiBaseURL;

export const fetchCampersList = async () => {
  const { data } = await axios.get('/');

  console.dir(data.items);
  return data.items;
};

export const fetchCamper = async id => {
  const { data } = await axios.get(`/${id}`);

  console.dir(data);
  return data;
};
