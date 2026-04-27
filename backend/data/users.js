import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('654321', 10),
    isAdmin: true,
  },
  {
    name: 'Lam Thanh Cong',
    email: 'lamthanhcong@gmail.com',
    password: bcrypt.hashSync('654321', 10),
  },
];

export default users;
