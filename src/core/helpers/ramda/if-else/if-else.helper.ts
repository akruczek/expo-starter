import * as R from 'ramda';

export const ifElse = (condition: boolean, _if: any, _else: any) => R.ifElse(
  () => condition,
  () => _if,
  () => _else,
)({});