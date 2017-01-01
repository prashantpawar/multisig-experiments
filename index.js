const vorpal = require('vorpal')();

const commands = {
  'importKey': require('./src/importKey.js'),
  'createKey': require('./src/createKey.js')
};

vorpal
  .command('contract [command...]')
  .option('-c, --createKey [hash_string]')
  .option('-i, --importKey <key>')
  .action(function (args, callback) {
    vorpal.log(args);
    Object.keys(args.options).map(function (commandName) {
      let commandArgs = args.options[commandName];
      vorpal.log(commands[commandName].call(vorpal, commandArgs));
    });
    callback();
  });

vorpal.show();
