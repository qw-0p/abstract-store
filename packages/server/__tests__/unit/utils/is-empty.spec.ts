import { isEmpty } from '@utils/is-empty';

describe('isEmpty', () => {
  it('should return true if the object is empty', () => {
    const obj = {};
    expect(isEmpty(obj)).toBeTruthy();
  });
  it('should return false if the object is not empty', () => {
    const obj = { a: 1 };
    expect(isEmpty(obj)).toBeFalsy();
  });
});
