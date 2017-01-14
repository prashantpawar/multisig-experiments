import R from 'ramda';
import generateHDWallet from '../src/commands/generateHDWallet.js';

describe('option generate', () => {
  it('should generate a mnemonic', () => {
    const option = {};
    const config = {};
    const mnemonic = generateHDWallet(option, config);
    const splitMnemonic = R.pipe(
      R.split(':'),
      R.last,
      R.trim,
      R.split(' ')
    );
    expect(splitMnemonic(mnemonic).length).toBe(12);
  });
});
