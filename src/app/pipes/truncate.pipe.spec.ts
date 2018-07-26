import { TruncatePipe } from './truncate.pipe';

describe('TruncatePipe', () => {
  let pipe: TruncatePipe;

  beforeEach(() => {
    pipe = new TruncatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('pipe to receive two arguments and return a string', () => {
    expect(typeof pipe.transform('', [])).toBe('string');
  });

  it('pipe to truncate text by the length given', () => {
    expect(pipe.transform('abcde', ['2', ''])).toBe('ab');
  });

  it('pipe to add ... if no 2nd arg given in array', () => {
    expect(pipe.transform('abcde', ['2'])).toBe('ab...');
  });
});
