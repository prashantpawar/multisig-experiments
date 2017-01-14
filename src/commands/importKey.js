var bitcoin = require('bitcoinjs-lib');
var bigi = require('bigi');

module.exports = function importKey(wif, config) {
  var keyPair = bitcoin.ECPair.fromWIF(wif, config.network);
  var address = keyPair.getAddress();
  return `Imported Address ${address}`;
}
