import { config } from '../config/config.js';

import { createPool } from 'mariadb';

export const pool = createPool({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  port: config.db.port,
  database: config.db.name,
});
