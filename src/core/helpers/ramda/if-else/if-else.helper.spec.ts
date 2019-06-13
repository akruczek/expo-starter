import { ifElse } from './if-else.helper';

describe('when ifElse was called', () => {
  const _if = 'ok';
  const _else = ':(';
  
  describe('and given condition equals true', () => {
    const condition = 1 === 1;

    it('should return second argument', () => {
      expect(ifElse(condition, _if, _else)).toEqual('ok');
    })
  });

  describe('and given condition equals false', () => {
    const condition = 1 < 0;

    it('should return third argument', () => {
      expect(ifElse(condition, _if, _else)).toEqual(':(');
    })
  });
});
