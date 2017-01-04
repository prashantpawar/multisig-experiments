const vorpal = require('vorpal')();
const network = require('./../network.js');


module.exports = {
  name: 'info',
  handlerFn: function (args, callback) {
    vorpal.log(args);
    callback();
  }
};
