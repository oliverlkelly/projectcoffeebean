const jwt = require('jsonwebtoken');

const secret = process.env.SECRET;
const expiration = '2h';

module.exports = {
  signToken: function ({ email, uname, _id }) {
    const payload = { email, uname, _id };
    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  },
};