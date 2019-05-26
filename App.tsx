import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { loadAssets } from './assets/load-assets';
import AppNavigator from './App.navigation';
import { Provider } from 'react-redux';
import { appStore } from './src/store/configure-store';

interface Props {
  skipLoadingScreen?: boolean;
}

interface State {
  isLoadingComplete: boolean;
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props & State) {
    super(props);
    this.state = {
      isLoadingComplete: false,  
    };
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
            startAsync={loadAssets}
            onError={this.loadingError}
            onFinish={this.loadingComplete}
        />
      );
    } else {
      return (
        <Provider store={appStore}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </Provider>
      );
    }
  }

  loadingError = (error: any) => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  loadingComplete = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
