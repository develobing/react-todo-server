import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

// Initialize express app
const app = express();
const PORT = 5555;

// Middleware
app.use(cors());
app.use(morgan('dev'));

// Routes
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
