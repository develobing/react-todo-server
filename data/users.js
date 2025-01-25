const defaultUsers = [
  {
    id: 'user1',
    email: 'user1@google.com',
    password: 'user1',
    name: '유저1',
    role: 'user',
  },
  {
    id: 'user2',
    email: 'user2@google.com',
    password: 'user2',
    name: '유저2',
    role: 'user',
  },
  {
    id: 'user3',
    email: 'user3@google.com',
    password: 'user3',
    name: '유저3',
    role: 'user',
  },
  {
    id: 'admin',
    email: 'admin@google.com',
    password: 'admin',
    name: '관리자',
    role: 'admin',
  },
];

export const Users = [...defaultUsers];
