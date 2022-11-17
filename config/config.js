import dotenv from 'dotenv';
dotenv.config();
export const config = {
  server: {
    port: process.env.PORT || 3000,
  },
  db: {
    host: process.env.HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || '',
    port: process.env.DB_PORT || 3306,
    name: process.env.DB_NAME || 'chat-rick-morty',
  },
};
