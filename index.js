const vorpal = require('vorpal')();

const generate = require('./src/generate.js');

vorpal
  .command('contract [command...]')
  .option('-c, --create')
  .action(function (args, callback) {
    this.log(generate());
    callback();
  });

vorpal.show();
