import express from 'express';
import _ from 'lodash';
import { Todos } from '../../data/todos.js';
import { Users } from '../../data/users.js';
import { auth } from '../../middlewares/auth.js';

const router = express.Router();

// 할일 전체 조회
router.get('/', auth, (req, res) => {
  const userId = req.loginUserId;
  const myTodos = Todos.filter((todo) => todo.userId === userId);

  res.json({
    isSuccess: true,
    message: '할일 전체 조회 성공',
    data: {
      todos: myTodos,
    },
  });
});

// 할일 상세 조회
router.get('/:id', auth, (req, res) => {
  res.json({
    isSuccess: true,
    message: '할일 상세 조회 성공',
    data: {
      todo: Todos.find((todo) => todo.id === req.params.id),
    },
  });
});

// 할일 작성
router.post('/', auth, (req, res) => {
  const newTodo = req.body;
  Todos.push(newTodo);

  res.json({
    isSuccess: true,
    message: '할일 작성 성공',
    data: {
      todo: newTodo,
    },
  });
});

// 할일 수정
router.put('/:id', auth, (req, res) => {
  const updatedTodo = req.body;
  Todos.find((todo) => todo.id === req.params.id).content = updatedTodo.content;

  res.json({
    isSuccess: true,
    message: '할일 수정 성공',
    data: {
      todo: updatedTodo,
    },
  });
});

// 할일 삭제
router.delete('/:id', auth, (req, res) => {
  Todos = Todos.filter((todo) => todo.id !== req.params.id);

  res.json({
    isSuccess: true,
    message: '할일 삭제 성공',
  });
});

export default router;
