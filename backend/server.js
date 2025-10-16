import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();

// ✅ Allowed frontend origins
const allowedOrigins = [
  'https://makefitlife.netlify.app',
  'http://localhost:8080',
  'http://localhost:5173'
];

// ✅ CORS setup with dynamic origin
app.use(cors({
  origin: function (origin, callback) {
    // Allow requests with no origin (Postman, server-to-server)
    if (!origin) return callback(null, true);

    if (allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));

// ✅ Handle preflight requests explicitly
app.options('*', cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.indexOf(origin) !== -1) return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.use(express.json());

// ✅ MySQL connection (Clever Cloud)
const db = mysql.createConnection({
  host: 'bqbacrrula4bc7yb4qbq-mysql.services.clever-cloud.com',
  user: 'ub1fndzhcvmueesi',
  password: 'VKxFR5vdiYhai7zOkpat',
  database: 'bqbacrrula4bc7yb4qbq',
  port: 3306,
  ssl: { rejectUnauthorized: false }
});

db.connect((err) => {
  if (err) {
    console.error('❌ Database connection failed:', err);
    return;
  }
  console.log('✅ Connected to Clever Cloud MySQL!');
});

// ✅ Registration endpoint
app.post('/api/register', (req, res) => {
  const { name, mobile, address } = req.body;

  if (!name || !mobile || !address) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  db.query('SELECT id FROM registrations WHERE mobile = ?', [mobile], (err, results) => {
    if (err) return res.status(500).json({ message: 'Database error' });

    if (results.length > 0) {
      return res.status(409).json({ message: 'Mobile number already registered' });
    }

    db.query(
      'INSERT INTO registrations (name, mobile, address) VALUES (?, ?, ?)',
      [name, mobile, address],
      (err) => {
        if (err) return res.status(500).json({ message: 'Database error' });
        res.json({ message: '✅ Registration saved successfully!' });
      }
    );
  });
});

// ✅ Root test route
app.get('/', (req, res) => res.send('Backend is running ✅'));

// ✅ Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
