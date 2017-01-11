import CreateCommand from './create.js';
import InfoCommand from './info.js';

export const contractCommands = [
  new CreateCommand(),
  new InfoCommand()
];

