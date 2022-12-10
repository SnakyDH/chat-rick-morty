import { pool } from '../../services/db.js';

class User {
  async create(username, type, email, password) {
    await pool.query(
      `INSERT INTO users (name,role,email,password) VALUES ('${username}','${type}','${email}', '${password}');`
    );
  }
  async findAll() {
    const res = await pool.query('SELECT * FROM `users`');
    return res;
  }
  async findOne(email) {
    const res = await pool.query(`SELECT * FROM users WHERE email='${email}'`);
    return res;
  }
  async update() {}
  async delete() {}
}

export default User;
