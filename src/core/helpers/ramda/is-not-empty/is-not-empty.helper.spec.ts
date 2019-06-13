import { isNotEmpty } from './is-not-empty.helper';

describe('when isNotEmpty was called', () => {
  describe('and given value is empty', () => {
    it('should return false', () => {
      expect(isNotEmpty([])).toBeFalsy();
    });
  });

  describe('and given value is not empty', () => {
    it('should return true', () => {
      expect(isNotEmpty(0)).toBeTruthy();
    });
  });
});
