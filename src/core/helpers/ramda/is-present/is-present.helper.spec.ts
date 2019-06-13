import { isPresent } from './is-present.helper';

describe('when isPresent was called', () => {
  describe('and given value is present (not empty and not nil)', () => {
    it('should return true', () => {
      expect(isPresent(0)).toBeTruthy();
    });
  });

  describe('and given value is not present (empty or nil)', () => {
    expect(isPresent({})).toBeFalsy();
  });
});
