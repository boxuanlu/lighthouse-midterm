"use strict";

const express = require('express');
const router  = express.Router();

module.exports = (knex) => {

  router.post('/', (req, res) => {
    console.log(req.body);
    // Todo post order to database
    knex('orders').insert({subtotal: req.body['order-subtotal'], tax: req.body['order-taxes'],
      total: req.body['order-total'], comment: 'this is a comment' }).returning('id').into('orders')
    .then (function (id) {
        let orderId = id[0];
        return knex.select('id').from('items').where('name', req.body['order-food']).then(function (foodId) {
          let itemId = foodId[0].id

            res.redirect('/')
        })      })




  });
  return router;
};
