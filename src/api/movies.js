import axios from 'axios';

axios.defaults.baseURL = 'https://66b1f8e71ca8ad33d4f5f63e.mockapi.io/campers';

export const fetchCampersList = async () => {
  const { data } = await axios.get('/');
  return data.results;
};

export const fetchCamper = async id => {
  const { data } = await axios.get(`/${id}`);

  console.dir(data);
  return data;
};
