var bitcoin = require('bitcoinjs-lib');
var bigi = require('bigi');

module.exports = function importKey(wif) {
  var keyPair = bitcoin.ECPair.fromWIF(wif);
  var address = keyPair.getAddress();
  return `Imported Address ${address}`;
}
