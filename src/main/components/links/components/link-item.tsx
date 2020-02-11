import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { Container } from '@core/styled/container/container.styled';
import { TEXT_SIZES } from '@core/styled/text/text.model';
import { Link } from '@core/styled/link/link.styled';
import { LinkItemModel } from '../models/link-item.models';

export const LinkItem = (props: LinkItemModel) => {
  const handlePress = (link: string) => {
    WebBrowser.openBrowserAsync(link);
  };

  return (
    <Container margins="5px">
      <Link size={TEXT_SIZES.SMALL} onPress={() => handlePress(props.label)}>
        - {props.label}
      </Link>
    </Container>
  );
}
