import React from 'react';
import { WebBrowser } from 'expo';
import { Text } from '../../core/styled/text/text.styled';
import { TEXT_SIZES } from '../../core/styled/text/text.model';
import { Container } from '../../core/styled/container/container.styled';
import { ScrollContainer } from '../../core/styled/scroll-container/scroll-container.styled';
import { Image } from '../../core/styled/image/image.styled';
import { AppContainer } from '../../core/styled/app-container/app-container';
import { Link } from '../../core/styled/link/link.styled';
import { Button } from 'react-native';
import { NavigationProps } from '../../core/navigation/navigation.model';
import { SCREENS } from '../../core/navigation/screens';

export class Home extends React.Component<NavigationProps, {}> {
  constructor(props: NavigationProps) {
    super(props)
    this.handleNavigate = this.handleNavigate.bind(this);
  }

  static navigationOptions = {
    title: 'Home',
  };

  private expoDocsURL = 'https://docs.expo.io';

  maybeRenderDevelopmentModeWarning() {
    return __DEV__
      ? 'Development mode is enabled, your app will be slower but you can use useful development tools.'
      : 'You are not in development mode, your app will run at full speed.';
  }

  handleLearMorePress = () => {
    WebBrowser.openBrowserAsync(this.expoDocsURL);
  };

  handleNavigate() {
    this.props.navigation.navigate(SCREENS.COUNTER);
  }

  render() {
    return (
      <AppContainer>
        <ScrollContainer>
          <Container alignItems="center" margins="40px 0 0">
            <Image source={require('../../../assets/images/briisk-logo.png')} size={120} />
            <Text size={TEXT_SIZES.LARGE}>
              expo-starter
            </Text>
          </Container>

          <Container>
            <Text size={TEXT_SIZES.SMALL} align="center" onPress={() => console.log('x')}>
              {this.maybeRenderDevelopmentModeWarning()}
            </Text>
          </Container>

          <Container alignItems="center" margins="10px 0 0">
            <Link onPress={this.handleLearMorePress} size={TEXT_SIZES.REGULAR}>
              Lear more
            </Link>
          </Container>

          <Container margins="30px 0">
            <Button title="Go to counter" onPress={this.handleNavigate} />
          </Container>
        </ScrollContainer>
      </AppContainer>
    );
  }
}
