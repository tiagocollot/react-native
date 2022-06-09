//!1st STEP
require('./models/User'); //! 5.1e
require('./models/Track'); //! 12.1
const express = require('express'); //! 1
const mongoose  = require('mongoose');//!1
const bodyParser = require('body-parser');//! 4 Handle JSON information
const authRoutes = require('./routes/authRoutes'); //! 3.1-
const trackRoutes = require('./routes/trackRoutes'); //! 12.1
const requireAuth = require('./middlewares/requireAuth'); //! 8.3-

const app = express(); //! 1

app.use(bodyParser.json()); //! 4
app.use(authRoutes); //! 3.1
app.use(trackRoutes); //!12.1
//! 2.ND STEP
const mongoUri =
'mongodb+srv://tiagocollot:passwordpassword@cluster0.ojq6w.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(mongoUri);

mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to mongo', err);
});
// //! 1.2st Step
// app.get('/', (req, res) => {
//   res.send('Hi There! 💻');
// });
//! 8.4
app.get('/', requireAuth, (req, res) => {
  res.send(`Your email: ${req.user.email}`);
});
//! 1.3
app.listen(3000, () => {
  console.log('Listening on port 3000');
});
