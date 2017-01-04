const bitcoin = require('bitcoinjs-lib');
module.exports = {
  network: bitcoin.networks.testnet,
  BLOCKTRAIL_API_KEY: process.env.BLOCKTRAIL_API_KEY || '879dbfa31a666f99d3eced9026842c82ee18a60c'
};
