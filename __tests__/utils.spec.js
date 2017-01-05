const utils = require('../src/utils.js');
describe('utils', () => {
  it('should provide a prefixer', () => {
    expect(utils.prefixer('command', 'prefix')).toBe('command prefix');
  })
});
