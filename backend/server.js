const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Imports for Routes
const todoRoutes = require("./routes/todoRoutes");

require('dotenv').config();

// connect to the database
const uri = process.env.DATABASE_URI;
mongoose.connect(uri, {
  useNewUrlParser: true})
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

// declare connection
const connection = mongoose.connection;

 // use middlewares
 app.use(cors());
 app.use(express.json());
 app.use(bodyParser.json());
 app.use(bodyParser.json({type: 'application/vnd.api+json'}));

 // Set up API Routes
 app.use("/api/todo", todoRoutes);


// declare the PORT
const PORT = process.env.PORT || 8080;

// listen to the port
app.listen(PORT, () =>{
  console.log(`Application is listening on port ${PORT}`);
});
