"use strict";

const express = require('express');
const router  = express.Router();

module.exports = () => {

  router.post('/', (req, res) => {
    console.log(req.body);
  });
  return router;
};
