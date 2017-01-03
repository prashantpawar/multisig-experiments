/**
 * contract create --counterparty 0x00 --brehon-1 0x00 --brehon-2 0x00 --brehon-3 0x00
 * Output: Contract address/Raw TX 
 * 
 * contract info <contract_address>
 * Output: Balance, info
 * */
const vorpal = require('vorpal')();
const createCommand = require('./src/commands/create.js');

vorpal
  .command('contract create')
  .option('-c, --createKey [hash_string]')
  .option('-i, --importKey <key>')
  .action(createCommand);

vorpal.show();
