import dotenv from 'dotenv';
import os from 'os';
import swaggerDoc from './swagger.json';
const defaults = swaggerDoc.paths;

dotenv.config();

const servers =[
    {
      url: 'http://localhost:5000',
      name: `${os.hostname()}`
    },
    {
      url: `https://${process.env.HEROKU_APP_NAME}.herokuapp.com`,
      name: `${os.hostname()}`
    }
  ]
//   process.env.NODE_ENV === 'production'
//     ? process.env.HOST.split('https://')[1]
//     : process.env.HOST.split('http://')[1];

const paths = {
  ...defaults,
};

const config = {
  swagger: '2.0',
  info: {
    version: '1.0.0.',
    title: 'API Rate Limiter Documentation',
    description: '',
  },
  servers:[
    {
      url: 'http://localhost:8005',
      name: `${os.hostname()}`
    },
    {
      url: `https://${process.env.HOST}`,
      name: `${os.hostname()}`
    }
  ],
  basePath: `/api`,
  schemes: ['http', 'https'],
  securityDefinitions: {
    JWT: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header',
      description:"Enter token like `Bear <Token>` "
    },
  },
  tags: [
    {
      name: 'API Rate Limiter Documentation',
    },
  ],
  consumes: ['application/json'],
  produces: ['application/json'],
  paths,
};
export default config;