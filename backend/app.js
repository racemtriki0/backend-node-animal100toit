const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const postsRouters = require('./routes/post');
const userRoutes = require('./routes/user');
const storesRoutes = require('./routes/store');
const app = express();

mongoose.connect("mongodb+srv://animal123:animal123@animal.bqbhs.mongodb.net/animal?retryWrites=true&w=majority")

  .then(() => {
    console.log('Connected to database!');
  })
  .catch(() => {
    console.log('connection Faild!');
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/images', express.static(path.join('backend/images')));

app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods',
    'GET, POST, PUT, PATCH, DELETE, OPTIONS');
  next();
});
app.use("/api/posts/", postsRouters);
app.use("/api/user/", userRoutes);
app.use("/api/stores/", storesRoutes);




module.exports = app;
