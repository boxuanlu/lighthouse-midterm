// Twilio Credentials
const accountSid = 'AC5db75ea4f47e12722710da200f48208e';
const authToken = '7f16b37280eb3a2f346570b1818179fe';

// require the Twilio module and create a REST client
const client = require('twilio')(accountSid, authToken);

client.messages.create(
  {
    to: '+15878931658',
    from: '+15878065799',
    body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
  },
  (err, message) => {
    console.log(message.sid);
  }
);
