// ! 3rd STEP
const express = require('express');
const mongoose = require('mongoose');//! 5.2
const jwt = require('jsonwebtoken'); //! 7
const User = mongoose.model('User');//! 5.3

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { email, password } = req.body; //! 6
  //! 6.3 -  try is going to catch the error and 'respond
  try {
    const user = new User({ email, password }) //! 6.1
    await user.save(); //! 6.2
    // console.log(req.body);//! 4.1
    const token = jwt.sign({ userId: user._id}, 'MY_SECRET_KEY'); //! 7.2
    res.send({ token: token });
    // res.send('You made a post request 🤘'); //! 3 STEP - Sends data to MongoDB|Commented after 7.2-
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

//! 10.1 Step
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error:'Must provide email and password' });
  }

  const user = await User.findOne({ email });
  if(!user) {
    return res.status(422).send({ error: 'Invalid password or email' });
  }

  try{
    await user.comparePassword(password);
    const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY')
    res.send({ token: token });
  } catch(err) {
      return res.status(422).send({ error: 'Invalid password or email' });
  }
});

//! 3.1 Step
module.exports = router;
