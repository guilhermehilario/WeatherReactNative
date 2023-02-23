import React, {useState} from 'react';

import {
  BallonGroup,
  CardDayGroup,
  Container,
  Header,
  MiniCardGroup,
} from './styles';

import {BalloonClimate} from '../../components/BalloonClimate';
import {Button} from '../../components/Button';
import {Card} from '../../components/Card';
import {CardDay} from '../../components/CardDay';
import {TextInput} from '../../components/Input';
import {MiniCardClimate} from '../../components/MiniCardClimate/MiniCardClimate';
import {ImagePerfil} from '../../components/ImagePerfil';
import {Localization} from '../../components/Localization';
import {iconsVector} from '../../utilities';

export function Home() {
  const [address, setAddress] = useState('');
  return (
    <Container>
      <Header>
        <Button>
          <iconsVector.bars width={25} height={25} />
        </Button>
        <TextInput.Root>
          <TextInput.Icon />
          <TextInput.Field
            placeholder="Estrada do Regalado"
            value={address}
            onChangeText={setAddress}
          />
        </TextInput.Root>
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
