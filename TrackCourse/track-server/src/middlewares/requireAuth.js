//! 8 STEP

const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

//! 8.1
module.exports = (req, res, next) => {
 const { authorization } = req.headers;
 //authorization === 'Bearer skdhaddsdscsveae2414124114cskjdakjbak'

 if(!authorization) {
  return res.status(401).send({ error: 'You must be logged in'});
 };
// !8.1
const token = authorization.replace('Bearer ', '');
jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
  if(err) {
    return res.status({ error: 'You must be logged in.' });
  }
  //!8.2
  const { userId } = payload;

  const user = await User.findById(userId);
  req.user = user;
  next();

});
};
