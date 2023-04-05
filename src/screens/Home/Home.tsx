import React from 'react';

import {
  BallonGroup,
  BallonGroupBody,
  BallonGroupHeader,
  BallonText,
  // CardDayGroup,
  Container,
  Header,
  Link,
  MiniCardGroup,
} from './styles';

import {BalloonClimate} from '../../components/BalloonClimate';
import {Button} from '../../components/Button';
import {Card} from '../../components/Card';
// import {CardDay} from '../../components/CardDay';
import {MiniCardClimate} from '../../components/MiniCardClimate/MiniCardClimate';
import {ImagePerfil} from '../../components/ImagePerfil';
import {Localization} from '../../components/Localization';
import {iconsVector} from '../../utilities';
import {Text} from 'react-native';

import {sunday} from '../../../assets/data.json';
import {ListRenderItemProps} from './types';

const DATA: ListRenderItemProps[] = sunday;

export function Home() {
  return (
    <Container>
      <Header>
        <Button>
          <iconsVector.bars width={25} height={25} fill="#000" />
        </Button>

        <ImagePerfil />
      </Header>
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

      <MiniCardGroup>
        <MiniCardClimate type="rain" value={28} />
        <MiniCardClimate type="wind" value={8} />
        <MiniCardClimate type="humidity" value={64} />
      </MiniCardGroup>

      <BallonGroup>
        <BallonGroupHeader>
          <BallonText>Today</BallonText>
          <Link>
            <Text>Next 7 days </Text>
            <iconsVector.arrowLeft width={15} height={15} />
          </Link>
        </BallonGroupHeader>
        <BallonGroupBody>
          {/* <BalloonClimate variant="day" active info={{day: 28, weekDay: 'Qui'}} />
        <BalloonClimate variant="day" info={{day: 29, weekDay: 'Sex'}} /> */}
          <BalloonClimate
            variant="hour"
            info={{hour: '00:00', temperature: '29°'}}
          />

          <BalloonClimate
            variant="hour"
            active
            info={{hour: '02:00', temperature: '18°'}}
          />
          <BalloonClimate
            variant="hour"
            info={{hour: '04:00', temperature: '19°'}}
          />
          <BalloonClimate
            variant="hour"
            info={{hour: '06:00', temperature: '21°'}}
          />
          <BalloonClimate
            variant="hour"
            info={{hour: '08:00', temperature: '23°'}}
          />
        </BallonGroupBody>
      </BallonGroup>

      {/*
      <CardDayGroup>
        <CardDay
          dayNumber={29}
          month="Sep"
          weekDay="Monday"
          temperature="17°/22°"
          iconClimate="Cloud-zap"
          climate="Cloudy"
        />

        <CardDay
          dayNumber={30}
          month="Sep"
          weekDay="Tuesday"
          temperature="22°/27°"
          iconClimate="Moon-fast-wind"
          climate="Storm"
        />
      </CardDayGroup> */}
    </Container>
  );
}
