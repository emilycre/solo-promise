const readPromise = require('../lib/readPromise');

describe('read promise', () => {
  it('reads a file', () => {
    return readPromise('./test.txt')
      .then(data => {
        expect(data).toEqual('hi.\n');
      });
  });
});
