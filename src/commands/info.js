import { getBalance } from '../network.js';
import Command from './command.js';

export default class InfoCommand extends Command {
  constructor () {
    super();
    this.name = 'info <address>';
    this.options = [];
  }

  handlerFn (args, callback) {
    let output = "";
    getBalance(args.address, function (err, address) {
      if (err) {
        output += err;
      } else {
        output += 'Balance: ' + address.balance;
      }
      callback(output);
    });
  }
}
