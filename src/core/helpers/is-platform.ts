import * as R from 'ramda';
import { Platform } from 'react-native';

export const isPlatform = (platform: 'ios' | 'android') =>
  R.propEq('OS', platform, Platform);
