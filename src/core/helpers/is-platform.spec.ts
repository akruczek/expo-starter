import { Platform } from 'react-native';
import { isPlatform } from './is-platform';

describe('when isPlatform was called', () => {
  describe('and current platform is android', () => {
    beforeAll(() => {
      Platform.OS = 'android';
    });

    it('should return true only if android was passed', () => {
      expect(isPlatform('android')).toBeTruthy();
      expect(isPlatform('ios')).toBeFalsy();
    });
  });

  describe('and current platform is iOS', () => {
    beforeAll(() => {
      Platform.OS = 'ios';
    });

    it('should return true only if iOS was passed', () => {
      expect(isPlatform('ios')).toBeTruthy();
      expect(isPlatform('android')).toBeFalsy();
    });
  });
});
