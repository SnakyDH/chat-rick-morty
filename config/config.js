require('dotenv').config();

const config = {
  server: {
    port: process.env.port || 3000,
  },
  db: {
    host: process.env.host || 'localhost',
    user: process.env.user || 'root',
    password: process.env.password || '',
    port: process.env.db_port || 3306,
    name: process.env.db_name || 'chat-rick-morty',
  },
};

module.exports = { config };
