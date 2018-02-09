"use strict";

const express = require('express');
const bcrypt = require('bcrypt');
const router  = express.Router();

module.exports = (knex) => {

  router.get("/", (req, res) => {
    knex
      .select("*")
      .from("users")
      .then((results) => {
        res.json(results);
    });

    });

  return router;
};


