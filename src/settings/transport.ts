import { IncomingMessage } from 'http';
import axios from 'axios';

export const getApiTransport = (req?: IncomingMessage) => {
  const instance = axios.create();

  return instance;
};
