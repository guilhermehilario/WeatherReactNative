import React, {useCallback} from 'react';

import {
  BallonGroup,
  BallonGroupHeader,
  BallonSeparators,
  BallonText,
  Container,
  Header,
  Link,
  MiniCardGroup,
  Middle,
} from './styles';

import {FlatList, ListRenderItemInfo, View} from 'react-native';

import {BalloonClimate} from '../../components/BalloonClimate';
import {Button} from '../../components/Button';
import {Card} from '../../components/Card';
import {MiniCardClimate} from '../../components/MiniCardClimate/MiniCardClimate';
import {ImagePerfil} from '../../components/ImagePerfil';
import {Localization} from '../../components/Localization';
import {iconsVector} from '../../utilities';
import {Text} from 'react-native';

import {sunday} from '../../../assets/data.json';
import {ListRenderItemProps} from './types';

const DATA: ListRenderItemProps[] = sunday;

const separator = () => {
  return <BallonSeparators />;
};

export function Home() {
  const RenderItem = useCallback(
    ({item}: ListRenderItemInfo<ListRenderItemProps>) => {
      return (
        <BalloonClimate
          variant="hour"
          active={item.active}
          info={{hour: item.hour, temperature: item.temperature}}
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

        <ImagePerfil />
      </Header>

      <View style={{flex: 1}} />

      <Middle>
        <Localization
          city="Mauá"
          state="São Paulo"
          weekDay="Sunday"
          dayNumber={29}
          month="December"
        />
        <Card
          temperature="28°"
          feel="Feels like 22°"
          timeCourse="Heavy Rain"
          timeDay="Tonight"
          climate="Cloud-zap"
          icon="Mid-snow-fast-winds"
          morning
        />
      </Middle>

      <View style={{flex: 1}} />

      <MiniCardGroup>
        <MiniCardClimate type="rain" value={28} />
        <MiniCardClimate type="wind" value={8} />
        <MiniCardClimate type="humidity" value={64} />
      </MiniCardGroup>

      <View style={{flex: 1}} />

      <BallonGroup>
        <BallonGroupHeader>
          <BallonText>Today</BallonText>
          <Link>
            <Text>Next 7 days </Text>
            <iconsVector.arrowLeft width={15} height={15} />
          </Link>
        </BallonGroupHeader>

        {/* <BalloonClimate variant="day" active info={{day: 28, weekDay: 'Qui'}} />
        <BalloonClimate variant="day" info={{day: 29, weekDay: 'Sex'}} /> */}
      </BallonGroup>
      <FlatList
        data={DATA}
        horizontal
        ItemSeparatorComponent={separator}
        contentContainerStyle={{paddingHorizontal: 25}}
        showsHorizontalScrollIndicator={false}
        renderItem={RenderItem}
      />
    </Container>
  );
}
