import express from 'express';
import users from './users.js';
import todos from './todos.js';

const router = express.Router();

router.use('/users', users);
router.use('/todos', todos);

export default router;
