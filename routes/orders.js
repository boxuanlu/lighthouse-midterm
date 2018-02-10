"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post('/', (req, res) => {
    console.log(req.body);
    // Todo post order to database
    res.redirect('/')

  });
  return router;
};
