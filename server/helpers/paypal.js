const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: process.env.mode,
  client_id: process.env.client_id,
  client_secret: process.env.client_secret,
});

module.exports = paypal;
