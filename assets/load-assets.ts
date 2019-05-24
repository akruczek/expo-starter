import { Asset, Font } from 'expo';

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
