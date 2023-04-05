import React, {useState, useCallback} from 'react';

import {FlatList, ListRenderItemInfo} from 'react-native';

import {Button} from '../../components/Button';
import {iconsVector} from '../../utilities';

import {Container, Header, Bottom, BallonSeparators} from './styles';
import {TextInput} from '../../components/Input';
import {Card} from '../../components/Card';
import {BalloonClimate} from '../../components/BalloonClimate';

import {ListRenderItemProps} from './types';

import {sunday} from '../../../assets/data.json';

const DATA: ListRenderItemProps[] = sunday;

const separator = () => {
  return <BallonSeparators />;
};

export function Map() {
  const [address, setAddress] = useState('');
  const RenderItem = useCallback(
    ({item}: ListRenderItemInfo<ListRenderItemProps>) => {
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
    },
    [],
  );

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
            renderItem={RenderItem}
          />
        </Card>
      </Bottom>
    </Container>
  );
}
