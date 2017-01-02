var bitcoin = require('bitcoinjs-lib');
var bigi = require('bigi');

module.exports = function importKey(wif) {
  const testnet = bitcoin.networks.testnet;
  var keyPair = bitcoin.ECPair.fromWIF(wif, testnet);
  var address = keyPair.getAddress();
  return `Imported Address ${address}`;
}
