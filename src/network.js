const bitcoin = require('bitcoinjs-lib');
const Blockchain = require('cb-http-client')
const blocktrail = require('blocktrail-sdk');

const config = require('./config.js');
const client = blocktrail.BlocktrailSDK({
  apiKey: config.BLOCKTRAIL_API_KEY,
  network: "BTC",
  testnet: config.network === bitcoin.networks.testnet
});


function getBalance(address, callback) {
  return client.address(address, callback);
}

module.exports = {
  getBalance: getBalance
}
