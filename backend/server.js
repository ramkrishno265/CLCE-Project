const express = require('express');
const cors = require('cors');
require('dotenv').config();

const teamRoutes = require('./routes/teamRoutes');
const uploadRoutes = require('./routes/uploadRoutes');
const storeRoutes = require('./routes/storeRoutes');

const app = express();

// Middlewares
app.use(cors({
  origin: '*',
  credentials: true
}));
app.use(express.json());

// API Routes
app.use('/api/team', teamRoutes);
app.use('/api', uploadRoutes);
app.use('/api/stores', storeRoutes);

// Health check endpoint
app.get('/', (req, res) => {
    res.send('🚀 CLCE Bangladesh API Service is Running...');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🌐 Server active at http://localhost:${PORT}`);
});