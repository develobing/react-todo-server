import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Todo');
});

router.post('/', (req, res) => {
  res.send('Todo');
});

router.put('/:id', (req, res) => {
  res.send('Todo');
});

router.delete('/:id', (req, res) => {
  res.send('Todo');
});

export default router;
