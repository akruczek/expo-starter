import * as Font from 'expo-font';
import { Asset } from 'expo-asset';

export const loadAssets = async (): Promise<any> => {
  return Promise.all([
    Asset.loadAsync([
      require('./images/robot-dev.png'),
      require('./images/robot-prod.png'),
    ]),
    Font.loadAsync({
      'space-mono': require('./fonts/SpaceMono-Regular.ttf'),
    }),
  ]);
};
