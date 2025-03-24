import axios from 'axios';
import { apiBaseURL } from '../constants';
import { createAsyncThunk } from '@reduxjs/toolkit';

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

export const fetchCampers = createAsyncThunk('campers/fetchAll', async () => {
  const { data } = await axios.get('/');
  console.log(data.items);
  return data.items;
});
