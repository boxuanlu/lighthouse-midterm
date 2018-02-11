"use strict";

const express = require('express');
const router  = express.Router();

function genInsertObj(ids, orderId) {
  let output = [];
  ids.forEach((id) => {
    let instance = {};
    instance['items_id'] = id;
    instance['orders_id'] = orderId;
    instance['quantity'] = '1';
    output.push(instance)
  })
  return output;
}


module.exports = (knex) => {

  router.post('/', (req, res) => {
    console.log(req.body);

    // Todo post order to database
    knex('orders').insert({subtotal: req.body['order-subtotal'], tax: req.body['order-taxes'],
      total: req.body['order-total'], comment: 'this is a comment' }).returning('id').into('orders')
    .then (function (id) {
        let orderId = id[0];

        return knex.select('id').from('items').whereIn('name', req.body['order-food']).then(function (foodId) {
          console.log(foodId)
          let itemIds = [];
          foodId.forEach((id) => {
            itemIds.push(Object.values(id).toString())
          })

          console.log(2, itemIds)
          let whereObj = genInsertObj(itemIds, orderId)
          console.log(whereObj)
          return knex('order-items').insert(whereObj).then(function(linkres) {

               res.redirect('/')
          })



        })      })




  });
  return router;
};
