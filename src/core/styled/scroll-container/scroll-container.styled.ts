import * as R from 'ramda';
import styled from 'styled-components/native';
import { ScrollViewProps } from 'react-native';

interface Props {
  margins?: string;
}

export const ScrollContainer = styled.ScrollView<Props & ScrollViewProps>`
  flex: 1;
  margin: ${R.propOr(0, 'margins')};
`;
