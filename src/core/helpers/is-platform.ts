import { Platform } from 'react-native';

export const isPlatform = (platform: 'ios' | 'android') => Platform.OS === platform;
