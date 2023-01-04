import React, {useState} from 'react';

import {Container, BallonGroup, MiniCardGroup, CardDayGroup} from './styles';

import {BalloonClimate} from '../../components/BalloonClimate';
import {MiniCardClimate} from '../../components/MiniCardClimate/MiniCardClimate';

import {Card} from '../../components/Card';
import {CardDay} from '../../components/CardDay';
import {TextInput} from '../../components/Input';

export function Home() {
  const [address, setAddress] = useState('');
  return (
    <Container>
      <TextInput.Root>
        <TextInput.Icon />
        <TextInput.Field
          placeholder="Estrada do Regalado"
          value={address}
          onChangeText={setAddress}
        />
      </TextInput.Root>

      <Card
        temperature="28°"
        feel="Feels like 22°"
        timeCourse="Heavy Rain"
        timeDay="Tonight"
        climate="Cloud-zap"
      />

      <MiniCardGroup>
        <MiniCardClimate type="rain" value={28} />
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
      </CardDayGroup>
    </Container>
  );
}
