import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

// Enable CORS for frontend (port 8080)
app.use(cors({
  origin: ['http://localhost:8080','https://makefitlife.netlify.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'bqbacrrula4bc7yb4qbq-mysql.services.clever-cloud.com',
  user: 'ub1fndzhcvmueesi',
  password: 'VKxFR5vdiYhai7zOkpat',
  database: 'bqbacrrula4bc7yb4qbq',
  port: 3306,
  ssl: { rejectUnauthorized: false } // Required for Clever Cloud
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    return;
  }
  console.log('✅ Connected to Clever Cloud MySQL!');
});

// API endpoint to register data
app.post('/api/register', (req, res) => {
  const { name, mobile, address } = req.body;

  // Check if mobile already exists
  db.query('SELECT id FROM registrations WHERE mobile = ?', [mobile], (err, results) => {
    if (err) {
      console.error(err);
      return res.status(500).send('Database error');
    }

    if (results.length > 0) {
      return res.status(409).json({ message: 'Mobile number already registered' });
    }

    // Insert new record
    db.query(
      'INSERT INTO registrations (name, mobile, address) VALUES (?, ?, ?)',
      [name, mobile, address],
      (err, result) => {
        if (err) {
          console.error(err);
          return res.status(500).send('Database error');
        }
        res.send('✅ Registration saved successfully!');
      }
    );
  });
});

// Start backend server
app.listen(3001, () => console.log('🚀 Server running on http://localhost:3001'));
