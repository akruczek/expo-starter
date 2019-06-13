import * as R from 'ramda';

export const isPresent = R.complement(R.either(R.isEmpty, R.isNil));
