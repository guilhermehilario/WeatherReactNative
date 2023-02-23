import React, {useState} from 'react';

import {Button} from '../../components/Button';
import {iconsVector} from '../../utilities';

import {Container, Header, Bottom, BallonGroup} from './styles';
import {TextInput} from '../../components/Input';
import {Card} from '../../components/Card';
import {BalloonClimate} from '../../components/BalloonClimate';

export function Map() {
  const [address, setAddress] = useState('');
  return (
    <Container>
      <Header>
        <Button>
          <iconsVector.bars width={25} height={25} fill="#000" />
        </Button>

        <TextInput.Root>
          <TextInput.Icon />
          <TextInput.Field
            placeholder="Estrada do Regalado"
            value={address}
            onChangeText={setAddress}
          />
        </TextInput.Root>

        <Button>
          <iconsVector.compress width={25} height={25} />
        </Button>
      </Header>

      <Bottom>
        <Card
          temperature="28°"
          feel="Feels like 22°"
          climate="Cloud-zap"
          morning={false}>
          <BallonGroup>
            <BalloonClimate
              variant="hour"
              active
              info={{hour: '00:00', temperature: '18°'}}
            />
            <BalloonClimate
              variant="hour"
              info={{hour: '02:00', temperature: '19°'}}
            />
            <BalloonClimate
              variant="hour"
              active
              info={{hour: '04:00', temperature: '17°'}}
            />
            <BalloonClimate
              variant="hour"
              active
              info={{hour: '06:00', temperature: '21°'}}
            />
            <BalloonClimate
              variant="hour"
              active
              info={{hour: '08:00', temperature: '23°'}}
            />
          </BallonGroup>
        </Card>
      </Bottom>
    </Container>
  );
}
