require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { pool } = require('./config/db');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api', routes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', message: 'Campus P2P Bicycle Rental API' });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not found' });
});

// Start server
const server = app.listen(PORT, async () => {
  try {
    await pool.query('SELECT 1');
    console.log(`✓ PostgreSQL connected`);
  } catch (err) {
    console.error('✗ PostgreSQL connection failed:', err.message);
  }
  console.log(`✓ Server running on http://localhost:${PORT}`);
});

module.exports = server;
