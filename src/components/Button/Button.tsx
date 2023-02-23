import React from 'react';
import {ButtonView} from './styles';

import {ButtonProps} from './types';

export function Button({children, ...rest}: ButtonProps) {
  return (
    <ButtonView {...rest}>
      {/* <Icon style={{height: 20, width: 20}} source={icon} /> */}
      {children}
    </ButtonView>
  );
}
