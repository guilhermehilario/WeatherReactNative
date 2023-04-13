import React from 'react';
import {ButtonView, styles} from './styles';

import {ButtonProps} from './types';

export function Button({children, ...rest}: ButtonProps) {
  return (
    <ButtonView {...rest} style={styles.shadow}>
      {/* <Icon style={{height: 20, width: 20}} source={icon} /> */}
      {children}
    </ButtonView>
  );
}
