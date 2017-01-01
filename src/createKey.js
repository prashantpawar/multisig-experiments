var bitcoin = require('bitcoinjs-lib');
var bigi = require('bigi');

module.exports = function generateKey (hash_string) {
  var hash = bitcoin.crypto.sha256(hash_string);
  var d = bigi.fromBuffer(hash);

  var keyPair = new bitcoin.ECPair(d);
  var address = keyPair.getAddress();
  return `Generated Address ${address}`;
}
