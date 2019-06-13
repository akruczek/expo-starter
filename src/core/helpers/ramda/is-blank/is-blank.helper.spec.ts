import { isBlank } from './is-blank.helper';

describe('when isBlank was called', () => {
  describe('and given value is empty or nil', () => {
    it('should return true', () => {
      expect(isBlank(null)).toBeTruthy();
      expect(isBlank([])).toBeTruthy();
    });
  });

  describe('and given value is not empty and not nil', () => {
    it('should return false', () => {
      expect(isBlank(0)).toBeFalsy();
      expect(isBlank('-')).toBeFalsy();
    });
  });
});
