import * as R from 'ramda';
import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { TEXT_SIZES } from './text.model';

interface Props {
  size?: TEXT_SIZES;
  align?: 'left' | 'center' | 'right';
}

export const Text = styled.Text<Props & TextProps>`
  font-family: 'space-mono';
  font-size: ${R.propOr(TEXT_SIZES.REGULAR, 'size')}px;
  text-align: ${R.propOr('left', 'align')};
`;
