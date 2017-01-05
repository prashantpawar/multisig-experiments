const R = require('ramda');
const bitcoin = require('bitcoinjs-lib');
const config = require('./../config.js');

const options = {
  'importKey': require('./importKey.js'),
  'createKey': require('./createKey.js')
};

module.exports = {
  name: 'create',
  handlerFn: function (args, callback) {
    const callOption = (optionArg, optionName) => {
      return options[optionName].call(this, optionArg, config);
    };
    const processOptions = R.compose(R.join(''), R.values, R.mapObjIndexed(callOption));
    const output = processOptions(args.options);
    callback();
    return output;
  },
  options: [
    '-c, --createKey [hash_string]',
    '-i, --importKey <key>'
  ]
}
