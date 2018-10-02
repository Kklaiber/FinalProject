const express = require("express");
const mongooose = require("mongoose");
const app = express();
const users = require("./routes/api/users");
const profile = require("./routes/api/profile");
const posts = require("./routes/api/posts");
const bodyParser = require("body-parser");
const passport = require('passport');


//Body-Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //DB CONFIG
const db = require("./config/keys").mongoURI;

//CONNECT TO MONGODB 
mongooose
  .connect(
    db,
    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB Connected!"))
  .catch(err => console.log(err));

//PASSPORT MIDDLEWARE
app.use(passport.initialize());

//PASSPORT CONFIG
require('./config/passport')(passport);

//USE PORTS
app.use("/api/users", users);
app.use("/api/profile", profile);
app.use("/api/posts", posts);

const port = process.env.PORT || 5000;

app.listen(port, () =>
  console.log(`Server up and running on port ${port}!! :D`)
);

