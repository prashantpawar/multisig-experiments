const R = require('ramda');
const vorpal = require('vorpal')();
const bitcoin = require('bitcoinjs-lib');
const config = require('./../config.js');

const options = {
  'importKey': require('./importKey.js'),
  'createKey': require('./createKey.js')
};

module.exports = {
  name: 'create',
  handlerFn: function (args, callback) {
    R.mapObjIndexed(function (optionArg, optionName) {
			vorpal.log(options[optionName].call(vorpal, optionArg, config));
    }, args.options);
    callback();
  },
  options: [
    '-c, --createKey [hash_string]',
    '-i, --importKey <key>'
  ]
}
