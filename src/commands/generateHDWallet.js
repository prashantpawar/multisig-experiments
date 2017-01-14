import bip39 from 'bip39';
import Wallet from './../Wallet.js';
import { walletPath } from './../constants.js';

module.exports = function generateHDWallet (option, config) {
  const w = new Wallet(walletPath);
  const mnemonic = bip39.generateMnemonic();

  w.saveWallet({
    mnemonic
  });

  return `Generated Mnemonic: ${mnemonic}`;
}
