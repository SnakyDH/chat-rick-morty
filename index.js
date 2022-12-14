// imports
import express from 'express';
import { createServer } from 'http';
import { realtimeServer } from './services/realtimeServer.js';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import { config } from './config/config.js';
import routes from './routes/general.routes.js';
import cookieParser from 'cookie-parser';
const port = config.server.port;
const app = express();
const httpServer = createServer(app);

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
};
//parsers
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cookieParser());
const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// public directory
app.use(express.static(path.join(__dirname, '/static')));
app.use(cors(corsOptions));
//routes
app.use(routes);
httpServer.listen(port, () => {
  console.log(`server on port ${port}`);
});

realtimeServer(httpServer);
