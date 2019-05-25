import * as R from 'ramda';
import styled from 'styled-components/native';
import { ImageProps } from 'react-native';

interface Props {
  size?: number;
}

export const Image = styled.Image<Props & ImageProps>`
  max-width: ${R.propOr('auto', 'size')};
  max-height: ${R.propOr('auto', 'size')};
`;
