const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// use middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.json({type: 'application/vnd.api+json'}));
app.use(morgan('dev'));


// connect to the database
const url = process.env.DATABASE_URI;
mongoose.connect(url);


// declare connection
const connection = mongoose.connection;

connection.once('open', () =>{
  console.log('Application is connected to the database successfully!');
})

// declare the PORT
const PORT = process.env.PORT || 8080;

// listen to the port
app.listen(PORT, () =>{
  console.log(`Application is listening on port ${PORT}`);
});
