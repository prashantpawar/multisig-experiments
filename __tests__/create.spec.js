import CreateCommand from '../src/commands/create.js';

describe('command create', () => {
  let createCommand;

  beforeEach(() => {
    createCommand = new CreateCommand();
  });

  it('should define a name', () => {
    expect(createCommand.name).toBeDefined();
  });

  it('should specify options', () => {
    expect(createCommand.options).toBeDefined();
  });

  describe('should have handler function which', () => {
    it('should be defined', () => {
      expect(createCommand.handlerFn).toBeDefined();
    });

    it('should call the callback', () => {
      const args = {};
      const callback = jest.fn();
      createCommand.handlerFn(args, callback);
      expect(callback).toHaveBeenCalled();
    });

    it('should call the options specified in arg.options', () => {
      createCommand.options = [
        '-o, --option-1 [option_arg]'
      ];
      const args = {
        options: {
          'option-1': true
        }
      };
      const option1Class = jest.fn();
      CreateCommand.optionClasses = {
        'option-1': option1Class
      };
      createCommand.handlerFn(args, jest.fn());
      expect(option1Class).toHaveBeenCalled();
    });
  });
});
