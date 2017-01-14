import bit39 from 'bip39';
import fs from 'fs';
import { Promise } from 'bluebird';

Promise.promisifyAll(fs);

export default class Wallet {
  constructor(path) {
    this.path = path;
  }

  loadWallet() {
    return fs.readFile(this.path, 'utf8')
      .then(function (contents) {
        console.log(contents);
        return JSON.parse(contents);
      })
      .catch(function (e) {
        console.error(e);
      });
  }

  saveWallet(data) {
    return fs.writeFile(this.path, JSON.stringify(data), 'utf8');
  }
}
