const vorpal = require('vorpal')();
const bitcoin = require('bitcoinjs-lib');
const config = require('./../config.js');

const commands = {
  'importKey': require('./importKey.js'),
  'createKey': require('./createKey.js')
};

module.exports = function (args, callback) {
  Object.keys(args.options).map(function (commandName) {
    let commandArgs = args.options[commandName];
    vorpal.log(commands[commandName].call(vorpal, commandArgs, config));
  });
  callback();
}