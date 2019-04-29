import validate from '../validate';

describe('Validate', () => {
  it('return no error given valid values', () => {
    const values = {
      username: 'tes',
      password: '123',
    };
    const assert = {
      username: '',
      password: '',
    };

    expect(validate(values)).toMatchObject(assert);
  });
});