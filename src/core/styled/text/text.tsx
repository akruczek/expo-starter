import React from 'react';
import { Text as NativeText, TextProps } from 'react-native';

interface Props {
  style?: any;
}

export class Text extends React.Component<Props & TextProps, {}> {
  render() {
    return <NativeText {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
