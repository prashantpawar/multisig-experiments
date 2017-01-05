/**
 * contract create --counterparty 0x00 --brehon-1 0x00 --brehon-2 0x00 --brehon-3 0x00
 * Output: Contract address/Raw TX 
 * 
 * contract info <contract_address>
 * Output: Balance, info
 * */
const R = require('ramda');
const vorpal = require('vorpal')();
const contractCommands = require('./src/commands/commands.js');
const utils = require('./src/utils.js');

const mainCommand = 'contract';

const defaultToEmptyArray = R.defaultTo([]);
const printOutput = (handlerFn) => {
  return (args, callback) => {
    vorpal.log(handlerFn(args, callback));
  }
};

contractCommands.map(function registerCommands(command) {
  const vc = vorpal.command(utils.prefixer(mainCommand, command.name));
  R.map(function (option) {
    vc.option(option);
  }, defaultToEmptyArray(command.options));
  vc.action(printOutput(command.handlerFn));
  return vc;
});

vorpal.show();
