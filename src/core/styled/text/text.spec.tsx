import 'react-native';
import React from 'react';
import { Text } from './text';
import renderer from 'react-test-renderer';

xdescribe('text', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Text>Snapshot test!</Text>).toJSON();
  
    expect(tree).toMatchSnapshot();
  });
})
