import InfoCommand from '../src/commands/info.js';

describe('command info', () => {
  let infoCommand;

  beforeEach(() => {
    infoCommand = new InfoCommand();
  });

  it('should define a name', () => {
    expect(infoCommand.name).toBeDefined();
  });

  it('should specify options', () => {
    expect(infoCommand.options).toBeDefined();
  });

  describe('should have handler function which', () => {
    it('should be defined', () => {
      expect(infoCommand.handlerFn).toBeDefined();
    });

    it('should call the callback', () => {
      const network = require('../src/network.js');
      network.getBalance = jest.fn();
      network.getBalance
        .mockImplementationOnce((add, cb) => cb(undefined, {
          balance: 1
        }));
      const args = {};
      const callback = jest.fn();
      infoCommand.handlerFn(args, callback);
      expect(callback).toHaveBeenCalled();
    });

  });
});
