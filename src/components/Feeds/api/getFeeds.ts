import { BASE_URL } from '@/constants';
import axios from 'axios';

export const getFeeds = async () => {
  const response = await axios.get(`${BASE_URL}/feeds`);
  console.log("Feeds data", response);
  return response;
};
