import React, {useState} from 'react';

import {FlatList} from 'react-native';

import {Button} from '../../components/Button';
import {iconsVector} from '../../utilities';

import {Container, Header, Bottom, BallonSeparators} from './styles';
import {TextInput} from '../../components/Input';
import {Card} from '../../components/Card';
import {BalloonClimate} from '../../components/BalloonClimate';

const DATA = [
  {
    hour: '00:00',
    temperature: '18°',
  },
  {
    hour: '02:00',
    temperature: '19°',
    active: true,
  },
  {
    hour: '04:00',
    temperature: '17°',
  },
  {
    hour: '06:00',
    temperature: '21°',
  },
  {
    hour: '08:00',
    temperature: '23°',
  },
  {
    hour: '08:00',
    temperature: '23°',
  },
];

const separator = () => {
  return <BallonSeparators />;
};

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
          <FlatList
            data={DATA}
            horizontal
            ItemSeparatorComponent={separator}
            contentContainerStyle={{paddingHorizontal: 20}}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => {
              return (
                <BalloonClimate
                  variant="hour"
                  active={!item.active}
                  info={{
                    hour: item.hour,
                    temperature: item.temperature,
                  }}
                />
              );
            }}
          />
        </Card>
      </Bottom>
    </Container>
  );
}
