import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'adminUser',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 8),
    isAdmin: true,
  },
  {
    name: 'Nabil',
    email: 'nabil@example.com',
    password: bcrypt.hashSync('123456', 8),
  },
  {
    name: 'noble',
    email: 'noblen@example.com',
    password: bcrypt.hashSync('123456', 8),
  },
]

export default users
