import React from 'react';
import { FlatList } from 'react-native';
import { AppContainer } from '../../../core/styled/app-container/app-container';
import { ScrollContainer } from '../../../core/styled/scroll-container/scroll-container.styled';
import { LinkItemModel } from './models/link-item.models';
import { Text } from '../../../core/styled/text/text.styled';
import { LinkItem } from './components/link-item';
import { Container } from '../../../core/styled/container/container.styled';

export const Links = () => {
  const links: LinkItemModel[] = [
    { key: 'expo', label: 'https://docs.expo.io' },
    { key: 'react-native', label: 'https://facebook.github.io/react-native/' },
  ];

  return (
    <AppContainer>
      <ScrollContainer>
        <Container margins="0 0 20px">
          <Text>
            Learn more about expo and react-native:
          </Text>
        </Container>

        <FlatList
            data={links}
            renderItem={({ item }) => <LinkItem {...item} />}
        />
      </ScrollContainer>
    </AppContainer>
  );
};
