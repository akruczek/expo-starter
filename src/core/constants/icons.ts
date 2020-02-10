import { Platform } from 'react-native';

export const ICONS: any = Platform.select({
  android: {
    INFORMATION_CIRCLE: 'md-information-circle',
    LINK: 'md-link',
    OPTIONS: 'md-options',
  },
  ios: {
    INFORMATION_CIRCLE: 'ios-information-circle',
    LINK: 'ios-link',
    OPTIONS: 'ios-link',
  },
});
