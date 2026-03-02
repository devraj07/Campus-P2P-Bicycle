# Campus P2P Bicycle Rental - Backend API

Node.js Express backend for the Campus P2P Bicycle Rental System.

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure environment**
   - Copy `.env.example` to `.env`
   - Update `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` for your PostgreSQL
   - Set a strong `JWT_SECRET`

3. **Initialize database**
   - Create a PostgreSQL database
   - Run `scripts/init-db.sql` in your database

4. **Start server**
   ```bash
   npm run dev    # development with nodemon
   npm start      # production
   ```

Server runs on **http://localhost:5000**

## Project Structure

```
src/
├── config/         # DB connection
├── controllers/    # Route handlers
├── middleware/     # Auth, etc.
├── models/         # Data access layer
├── routes/         # API route definitions
└── server.js       # Entry point
```

## API Endpoints

| Method | Endpoint       | Description       |
|--------|----------------|-------------------|
| GET    | /health        | Health check      |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login        |
| GET    | /api/auth/me       | Get current user (requires JWT) |
