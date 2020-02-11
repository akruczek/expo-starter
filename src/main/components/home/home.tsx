import React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Text } from '../../../core/styled/text/text.styled';
import { TEXT_SIZES } from '../../../core/styled/text/text.model';
import { Container } from '../../../core/styled/container/container.styled';
import { ScrollContainer } from '../../../core/styled/scroll-container/scroll-container.styled';
import { Image } from '../../../core/styled/image/image.styled';
import { AppContainer } from '../../../core/styled/app-container/app-container';
import { Link } from '../../../core/styled/link/link.styled';
import { Button } from 'react-native';
import { NavigationProps } from '../../../core/navigation/navigation.model';
import { SCREENS } from '../../../core/navigation/screens';

export const Home = ({ navigation }: NavigationProps) => {
  const maybeRenderDevelopmentModeWarning = () => __DEV__
    ? 'Development mode is enabled, your app will be slower but you can use useful development tools.'
    : 'You are not in development mode, your app will run at full speed.';

  const handleLearMorePress = () => {
    WebBrowser.openBrowserAsync('https://docs.expo.io');
  };

  const handleNavigate = () => {
    navigation.navigate(SCREENS.COUNTER);
  }

  return (
    <AppContainer>
      <ScrollContainer>
        <Container alignItems="center" margins="40px 0 0">
          <Image source={require('../../../../assets/images/logo.png')} size={120} />
          <Text size={TEXT_SIZES.LARGE}>
            expo-starter
          </Text>
        </Container>

        <Container>
          <Text size={TEXT_SIZES.SMALL} align="center">
            {maybeRenderDevelopmentModeWarning()}
          </Text>
        </Container>

        <Container alignItems="center" margins="10px 0 0">
          <Link onPress={handleLearMorePress} size={TEXT_SIZES.REGULAR}>
            Lear more
          </Link>
        </Container>

        <Container margins="30px 0">
          <Button title="Go to counter" onPress={handleNavigate} />
        </Container>
      </ScrollContainer>
    </AppContainer>
  );
};
