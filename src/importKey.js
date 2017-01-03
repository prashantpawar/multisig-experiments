var bitcoin = require('bitcoinjs-lib');
var bigi = require('bigi');
const config = require('./config.js');

module.exports = function importKey(wif) {
  var keyPair = bitcoin.ECPair.fromWIF(wif, config.network);
  var address = keyPair.getAddress();
  return `Imported Address ${address}`;
}
