const bitcoin = require('bitcoinjs-lib');
const bigi = require('bigi');

module.exports = function createKey (hash_string, config) {
  let keyPair;
  if(hash_string === true) {
    keyPair = bitcoin.ECPair.makeRandom(config); 
  } else {
    let hash = bitcoin.crypto.sha256(hash_string);
    let d = bigi.fromBuffer(hash);
    keyPair = new bitcoin.ECPair(d, null, config);
  }

  let address = keyPair.getAddress();
  let privateKey = keyPair.toWIF();
  return `Created Address: ${address}
Created Key: ${privateKey}`;
}
