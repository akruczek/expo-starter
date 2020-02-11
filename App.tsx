import * as React from 'react';
import { StatusBar } from 'react-native';
import { AppLoading } from 'expo';
import { enableScreens } from 'react-native-screens';
import { loadAssets } from './assets/load-assets';
import { AppNavigator } from './App.navigation';
import { Provider } from 'react-redux';
import { appStore } from './src/store/configure-store';
import { Container } from '@core/styled/container/container.styled';
import { ifElse, isPlatform } from '@core/helpers';

interface Props {
  skipLoadingScreen?: boolean;
}

interface State {
  isLoadingComplete: boolean;
}

enableScreens();

export default class App extends React.Component<Props, State> {
  constructor(props: Props & State) {
    super(props);
    this.state = {
      isLoadingComplete: false,  
    };

    this.loadingComplete = this.loadingComplete.bind(this);
  }

  isLoading() {
    return !this.state.isLoadingComplete && !this.props.skipLoadingScreen;
  }
  
  loadingError(error: any) {
    console.error(error);
  };
  
  loadingComplete() {
    this.setState({ isLoadingComplete: true });
  };

  render() {
    return ifElse(
      this.isLoading(),
      <AppLoading
          startAsync={loadAssets}
          onError={this.loadingError}
          onFinish={this.loadingComplete.bind(this)}
      />,
      <Provider store={appStore}>
        <Container>
          {isPlatform('ios') && <StatusBar barStyle="default" />}
          <AppNavigator />
        </Container>
      </Provider>,
    );
  }
}
