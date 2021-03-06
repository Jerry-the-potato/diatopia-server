import dotenv from 'dotenv';
import {ServerOptions} from 'ws';

dotenv.config();

const options: ServerOptions = {
  host: process.env.WSS_HOST,
  port: Number.parseInt(process.env.WSS_PORT || '443'),
  path: process.env.WSS_PATH,
  noServer: true,
};

export default options;
