import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading } from 'expo';
import { loadAssets } from './assets/load-assets';
import AppNavigator from './App.navigation';
import { Provider } from 'react-redux';
import { appStore } from './src/store/configure-store';
import { Container } from './src/core/styled/container/container.styled';

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

    this.loadingComplete = this.loadingComplete.bind(this);
  }

  loadingError(error: any) {
    console.error(error);
  };

  loadingComplete() {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
            startAsync={loadAssets}
            onError={this.loadingError}
            onFinish={this.loadingComplete.bind(this)}
        />
      );
    } else {
      return (
        <Provider store={appStore}>
          <Container>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </Container>
        </Provider>
      );
    }
  }
}
