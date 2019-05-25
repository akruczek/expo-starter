import * as R from 'ramda';
import styled from 'styled-components/native';
import { ViewProps } from 'react-native';

export interface Props {
  flexDirection?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
  flexWrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
  justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
  alignItems?: 'stretch' | 'flex-start' | 'flex-end' | 'center' | 'baseline' | 'initial';
  alignContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'stretch';
  margins?: string;
}

export const Container = styled.View<Props & ViewProps>`
  flex: 1;
  flex-direction: ${R.propOr('column', 'flexDirection')};
  flex-wrap: ${R.propOr('nowrap', 'flexWrap')};
  justify-content: ${R.propOr('flex-start', 'justifyContent')};
  align-items: ${R.propOr('stretch', 'alignItems')};
  align-content: ${R.propOr('stretch', 'alignContent')};
  margin: ${R.propOr(0, 'margins')};
`;
