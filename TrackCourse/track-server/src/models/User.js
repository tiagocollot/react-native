//! 5th STEP

const mongoose = require('mongoose');
const bcrypt = require('bcrypt'); //! 9.1

const userSchema= new mongoose.Schema({
  email: {
    type: String,
    unique: true, //? We want every email to be tied to a unique single user
    required: true //? If the user does not have an email then they are invalid and we should not be able to save them
  },
  password: {
    type: String, //? Doesn´t need to be unique|two users can have identical passwords
    required: true //? to be sure every user as created a password
  }
});

//! 9-
userSchema .pre('save', function(next) {
 const user = this;
 if (!user.isModified('password')) {
   return next();
 }
 //!9.1-
 bcrypt.genSalt(10, (err, salt) => {
    if(err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, (err, hash) => {
      if(err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});

//! 10-
userSchema.methods.comparePassword = function(candidatePassword) {
  const user = this;
  candidatePassword

  return new Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
     if (err) {
       return reject(err);
     }

     if (!isMatch) {
       return reject(false);
     }

     resolve(true);
    });
  });
};

mongoose.model('User', userSchema);
