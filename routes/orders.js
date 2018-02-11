"use strict";

const express = require('express');
const router  = express.Router();

const accountSid = process.env.TAYLORACCOUNT;

const authToken = process.env.TAYLORAUTH;
const client = require('twilio')(accountSid, authToken);
router.use(flash())
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

    // post info to orders table
    knex('orders')
    .insert({subtotal: req.body['order-subtotal'],
            tax: req.body['order-taxes'],
            total: req.body['order-total'],
            comment: 'this is a comment' })
    .returning('id')
    .into('orders')
    .then (function (id) {
      let orderId = id[0];
      // retrieve the id numbers for selected items
      return knex.select('id')
        .from('items')
        .whereIn('name', req.body['order-food'])
        .then(function (foodId) {
          //console.log(foodId)
          let itemIds = [];
          foodId.forEach((id) => {
            for (let key in id) {
              itemIds.push(id[key])
            }
            // itemIds.push(Object.values(id).toString())
          })
          // generates objects to be inserted into order-items link table
          let whereObj = genInsertObj(itemIds, orderId)
          // insert rows into order-items link table
          return knex('order-items')
            .insert(whereObj)
            .then(function(linkres) {
              return knex('items')
              .whereIn('id', itemIds)
              .update({
                'likes': knex.raw('likes + 1')
              })
              .then(function (foodItems) {
                // generates sms message and sends to chef
                client.messages.create(
                  {
                    to: '+14037630100', //+15878931658
                    from: '+15878076790',
                    body: `Order's in! Ravi Requests ${req.body['order-food']}` ,
                  },
                  (err, message) => {
                    req.flash('info', 'order is submitted')
                    res.redirect('/')
                  }
                );
              })

          })



        })      })




  });
  return router;
};
