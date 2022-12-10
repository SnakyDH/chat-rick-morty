import { pool } from '../../services/db.js';

class User {
  async create(username, type, email, password) {
    await pool.query(
      `INSERT INTO users (name,role,email,password) VALUES ('${username}','${type}','${email}', '${password}');`
    );
  }
  async findAll() {
    return await pool.query('SELECT * FROM `users`');
  }
  async findOne(email) {
    return await pool.query(`SELECT * FROM users WHERE email='${email}'`);
  }
  async update() {}
  async delete() {}
}

export default User;
