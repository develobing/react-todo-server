const defaultTodos = [
  {
    id: 'todo1',
    content: 'Javascript 공부하기',
    isDone: false,
    userId: 'user1',
    createdAt: new Date('2024-12-25'),
    updatedAt: new Date('2024-12-25'),
  },
  {
    id: 'todo2',
    content: 'React 공부하기',
    isDone: false,
    userId: 'user1',
    createdAt: new Date('2025-01-01'),
    updatedAt: new Date('2025-01-01'),
  },
  {
    id: 'todo3',
    content: '영어 마스터하기',
    isDone: false,
    userId: 'user2',
    createdAt: new Date('2025-01-05'),
    updatedAt: new Date('2025-01-05'),
  },
  {
    id: 'todo4',
    content: '일본어 공부하기',
    isDone: false,
    userId: 'user2',
    createdAt: new Date('2025-01-03'),
    updatedAt: new Date('2025-01-03'),
  },
  {
    id: 'todo5',
    content: '중국어 공부하기',
    isDone: false,
    userId: 'user3',
    createdAt: new Date('2025-01-07'),
    updatedAt: new Date('2025-01-07'),
  },
];

export const Todos = [...defaultTodos];
