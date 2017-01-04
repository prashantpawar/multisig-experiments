const vorpal = require('vorpal')();
const network = require('./../network.js');

module.exports = {
  name: 'info <address>',
  handlerFn: function (args, callback) {
    network.getBalance(args.address, function (err, address) {
      if (err) {
        vorpal.log(err);
      } else {
        vorpal.log('Balance: ' + address.balance);
      }
      callback();
    });
  }
};
