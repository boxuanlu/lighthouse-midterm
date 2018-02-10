"use strict";

require('dotenv').config();

const PORT        = process.env.PORT || 8080;
const ENV         = process.env.ENV || "development";
const express     = require("express");
const bodyParser  = require("body-parser");
const flash = require('connect-flash');
const cookieSession = require('cookie-session');
const sass        = require("node-sass-middleware");
const app         = express();

const knexConfig  = require("./knexfile");
const knex        = require("knex")(knexConfig[ENV]);
const morgan      = require('morgan');
const knexLogger  = require('knex-logger');

// Seperated Routes for each Resource
const usersRoutes = require("./routes/users");

// Load the logger first so all (static) HTTP requests are logged to STDOUT
// 'dev' = Concise output colored by response status for development use.
//         The :status token will be colored red for server error codes, yellow for client error codes, cyan for redirection codes, and uncolored for all other codes.
app.use(morgan('dev'));

// Log knex SQL queries to STDOUT as well
app.use(knexLogger(knex));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/styles", sass({
  src: __dirname + "/styles",
  dest: __dirname + "/public/styles",
  debug: true,
  outputStyle: 'expanded'
}));
app.use(express.static("public"));

app.use(cookieSession({
  secret: process.env.SESSION_SECRET || 'development'
}));
app.use(flash())

// Mount all resource routes
app.use("/api/users", usersRoutes(knex));

// Home page
app.get("/", (req, res) => {
  knex.select('*').from('items').then(function(rows) {
    let templateVars = {};
    rows.forEach((row) => {
      console.log(Object.keys(templateVars))
      if (!Object.keys(templateVars).includes(row['menu_section'])) {
        templateVars[row['menu_section']] = [];
        templateVars[row['menu_section']].push(row);
      } else {
        templateVars[row['menu_section']].push(row);
      }
    })

    /* templateVars = {
    *  salads: Array of salad objects
    *  Wraps: Array of Wraps objects
    *  Soups: Array of Soups objects
    * }
    */
    res.render("index", templateVars);
  })
});


app.post("/userlogin",(req,res)=>{
  console.log(req.session);
  //let user = req.session.user;
  //console.log(user);
  let userEmail = req.body.email;
  let userPassword = req.body.password;
  console.log(userEmail);
  console.log(userPassword);

   // const templateVars = {
   //  urls: urlDatabase,
   //  user_id: req.session.user_id,
   // };
  // knex.select('username', 'password', 'email')
  // .from('users')
  // .where ({'email':userEmail ,'password':userPassword})
  // .then(function(userData){
  //   userData.forEach((user)=>{
  //     console.log('Logged in');
  //   });
  // });
  });


// ------------- Restaurant Login GET / POST

app.get("/restaurantLogin",(req,res)=>{
  res.render('restaurantLogin');
});



// app.post("/restaurantlogin",(req,res)=>{
//   let restaurantEmail = req.body.email;
//   let restaurantPassword = req.body.password;
//   console.log(restaurantPassword);
//   knex.select('username', 'password', 'email')
//   .from('restaurants')
//   .where ({'email':restaurantEmail ,'password':restaurantPassword})
//   .then(function(restaurantData){
//     userData.forEach((restaurant)=>{
//       console.log('Logged in');
//     });
// });


// ----------------Checkout -----------------//

// app.get("/checkout",(res,req)=>{

//   res.render('checkout');
// })

//-----------------------------------------//






app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
