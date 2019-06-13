import { isNotNil } from './is-not-nil.helper';

describe('when isNotNil was called', () => {
  describe('and given value is nil', () => {
    it('should return false', () => {
      expect(isNotNil(undefined)).toBeFalsy();
    });
  });

  describe('and given value is not nil', () => {
    it('should retrun true', () => {
      expect(isNotNil([])).toBeTruthy();
    });
  });
});
