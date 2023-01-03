import React from 'react';

import {Container, BallonGroup, MiniCardGroup} from './styles';

import {BalloonClimate} from '../../components/BalloonClimate';
import {MiniCardClimate} from '../../components/MiniCardClimate/MiniCardClimate';

import {Card} from '../../components/Card';

export function Home() {
  return (
    <Container>
      <Card climate="Cloud-zap" />

      <MiniCardGroup>
        <MiniCardClimate opacity type="rain" value={28} />
        <MiniCardClimate type="wind" value={8} />
        <MiniCardClimate type="humidity" value={64} />
      </MiniCardGroup>

      <BallonGroup>
        <BalloonClimate variant="day" active info={{day: 28, weekDay: 'Qui'}} />
        <BalloonClimate variant="day" info={{day: 29, weekDay: 'Sex'}} />
        <BalloonClimate
          variant="hour"
          active
          info={{hour: '12:00', temperature: '28°'}}
        />
        <BalloonClimate
          variant="hour"
          info={{hour: '13:00', temperature: '29°'}}
        />
      </BallonGroup>
    </Container>
  );
}
