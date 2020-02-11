import * as React from 'react';
import { View, ButtonProps, Button as NativeButton } from 'react-native';
import { colors } from '../../constants/colors';
import { isPlatform } from '../../helpers';

export const Button = ({ ...buttonProps }: ButtonProps) => (
  <View style={{ backgroundColor: buttonProps.color || colors.blue }}>
    <NativeButton
        {...buttonProps}
        color={isPlatform('ios') ? 'white' : buttonProps.color || colors.blue}
    />
  </View>
);
