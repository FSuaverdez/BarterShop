import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
    reviews: [],
    rating: 4.5,
    numReviews: 18,
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('123456', 10),
    reviews: [],
    rating: 3.5,
    numReviews: 13,
  },
  {
    name: 'Jane Doe',
    email: 'jane@example.com',
    password: bcrypt.hashSync('123456', 10),
    reviews: [],
    rating: 4.7,
    numReviews: 15,
  },
]

export default users
