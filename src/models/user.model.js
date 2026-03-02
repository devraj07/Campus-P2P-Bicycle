const { query } = require('../config/db');

const findByEmail = async (email) => {
  const result = await query(
    'SELECT id, email, password, name, created_at FROM users WHERE email = $1',
    [email]
  );
  return result.rows[0] || null;
};

const findById = async (id) => {
  const result = await query(
    'SELECT id, email, name, created_at FROM users WHERE id = $1',
    [id]
  );
  return result.rows[0] || null;
};

const create = async ({ email, password, name }) => {
  const result = await query(
    'INSERT INTO users (email, password, name) VALUES ($1, $2, $3) RETURNING id, email, name, created_at',
    [email, password, name]
  );
  return result.rows[0];
};

module.exports = { findByEmail, findById, create };
