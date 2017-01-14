import Wallet from '../src/wallet.js';

describe('Wallet', () => {
  let wallet;

  beforeEach(() => {
  });

  it('should have a constructor with path', () => {
    const path = 'path/to/wallet';
    wallet = new Wallet(path);
    expect(wallet.path).toBe(path);
  });
});
