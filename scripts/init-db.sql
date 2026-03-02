-- Campus P2P Bicycle Rental - Initial Database Schema
-- Run this script against your PostgreSQL database before starting the app

CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Add more tables for bicycles, rentals, etc. as the project evolves
