// imports
import express from 'express';
import cors from 'cors';
//myImports
import { config } from './config/config.js';
import { getData } from './scripts/scrapper.rick-morty.js';
const port = config.server.port;
const app = express();

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  res.send('hola');
  console.log(getData('rick'));
});

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
