/**
 * contract create --counterparty 0x00 --brehon-1 0x00 --brehon-2 0x00 --brehon-3 0x00
 * Output: Contract address/Raw TX 
 * 
 * contract info <contract_address>
 * Output: Balance, info
 * */
const vorpal = require('vorpal')();
const contractCommands = require('./src/commands/commands.js');
const utils = require('./src/utils.js');

const mainCommand = 'contract';

/**
vorpal
  .command('contract create')
  .option('-c, --createKey [hash_string]')
  .option('-i, --importKey <key>')
  .action(createCommand);
**/

contractCommands.map(function registerCommands(command) {
  const vc = vorpal.command(utils.prefixer(mainCommand, command.name));
  command.options.map(function (option) {
    vc.option(option);
  });
  vc.action(command.handlerFn);
  return vc;
});

vorpal.show();
