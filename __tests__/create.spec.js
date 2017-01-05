const createCommand = require('../src/commands/create.js');
describe('command create', () => {
  it('should define a name', () => {
    expect(createCommand.name).toBeDefined();
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
  });
});
