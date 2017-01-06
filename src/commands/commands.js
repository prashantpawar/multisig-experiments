import CreateCommand from './create.js';

export const contractCommands = [
  new CreateCommand(),
  require('./info.js'),
];

