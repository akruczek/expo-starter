import * as R from 'ramda';

export const isBlank = R.either(R.isEmpty, R.isNil);
