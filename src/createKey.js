const bitcoin = require('bitcoinjs-lib');
const bigi = require('bigi');

module.exports = function generateKey (hash_string) {
  let keyPair;
  if(hash_string === true) {
    keyPair = bitcoin.ECPair.makeRandom(); 
  } else {
    let hash = bitcoin.crypto.sha256(hash_string);
    let d = bigi.fromBuffer(hash);
    keyPair = new bitcoin.ECPair(d);
  }

  let address = keyPair.getAddress();
  let privateKey = keyPair.toWIF();
  return `Created Address: ${address}
Created Key: ${privateKey}`;
}
