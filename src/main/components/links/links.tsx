import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { AppContainer } from '../../../core/styled/app-container/app-container';
import { ScrollContainer } from '../../../core/styled/scroll-container/scroll-container.styled';
import { LinkItemModel } from './models/link-item.models';
import { Text } from '../../../core/styled/text/text.styled';
import { LinkItem } from './components/link-item';
import { Container } from '../../../core/styled/container/container.styled';

export class Links extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  private links: LinkItemModel[] = [
    { key: 'expo', label: 'https://docs.expo.io' },
    { key: 'react-native', label: 'https://facebook.github.io/react-native/' },
  ];

  render() {
    return (
      <AppContainer>
        <ScrollContainer>
          <Container margins="0 0 20px">
            <Text>
              Learn more about expo and react-native:
            </Text>
          </Container>

          <FlatList
              data={this.links}
              renderItem={({ item }) => <LinkItem {...item} />}
          />
        </ScrollContainer>
      </AppContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
