import R from 'ramda';
import bitcoin from 'bitcoinjs-lib';
import config from './../config.js';
import Command from './command.js';

let _optionClasses = {
  'importKey': require('./importKey.js'),
  'createKey': require('./createKey.js')
};

export default class CreateCommand extends Command {
  constructor () {
    super();
    this.name = 'create';
    this.options = [
      '-c, --createKey [hash_string]',
      '-i, --importKey <key>'
    ];
  }

  static get optionClasses() {
      return _optionClasses;
  }

  static set optionClasses(value) {
    _optionClasses = value;
  }

  handlerFn(args, callback) {
    const callOption = (optionArg, optionName) => {
      return _optionClasses[optionName].call(this, optionArg, config);
    };
    const processOptions = R.compose(
      R.join(''),
      R.values,
      R.mapObjIndexed(callOption)
    );
    const output = processOptions(args.options);
    callback(output);
  }

}
