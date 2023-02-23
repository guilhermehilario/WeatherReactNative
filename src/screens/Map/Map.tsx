import React from 'react';

import {Button} from '../../components/Button';
import {iconsVector} from '../../utilities';

import {Container, Header} from './styles';

export function Map() {
  return (
    <Container>
      <Header>
        <Button>
          <iconsVector.compress width={25} height={25} />
        </Button>
      </Header>
    </Container>
  );
}
