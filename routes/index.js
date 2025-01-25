import express from 'express';
import api from './api/index.js';

const router = express.Router();

router.use('/api', api);
router.get('/', (req, res) => {
  res.send('React Basic Todo - API Server!');
});

export default router;
