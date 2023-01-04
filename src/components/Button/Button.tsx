import React from 'react';
import {ButtonView, Icon} from './styles';

import {iconsVector} from '../../utilities';

export function Button() {
  return (
    <ButtonView>
      <Icon source={iconsVector.bars} />
    </ButtonView>
  );
}
