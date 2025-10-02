import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

// Enable CORS for frontend (port 8080)
app.use(cors({
  origin: 'http://localhost:8080',   // allow requests only from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json());

// MySQL connection setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'health_customer_details'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL!');
});

// Example endpoint to save registration
app.post('/api/register', (req, res) => {
  const { name, mobile, address } = req.body;
  db.query(
    'INSERT INTO registrations (name, mobile, address) VALUES (?, ?, ?)',
    [name, mobile, address],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).send('DB Error');
      }
      res.send('Registration saved!');
    }
  );
});

app.listen(3001, () => console.log('Server running on port 3001'));
