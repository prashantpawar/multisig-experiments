var bitcoin = require('bitcoinjs-lib');
var bigi = require('bigi');

module.exports = function exportFn() {
  var hash = bitcoin.crypto.sha256('hello world');
  var d = bigi.fromBuffer(hash);

  var keyPair = new bitcoin.ECPair(d);
  var address = keyPair.getAddress();
  return `Generated Address ${address}`;
}
