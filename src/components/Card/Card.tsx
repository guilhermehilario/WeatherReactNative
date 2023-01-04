import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  IconHeader,
  InfoTemperature,
  Main,
  InfoClimate,
  Temperature,
  Feels,
  Climate,
  TimeDay,
  IconMain,
} from './styles';
import {CardProps} from './types';

const icons = {
  'Sun-cloud-mid-rain': require('../../../assets/icons/Sun-cloud-mid-rain.png'),
  'Cloud-zap': require('../../../assets/icons/Cloud-zap.png'),
  'Moon-cloud-fast-wind': require('../../../assets/icons/Moon-cloud-fast-wind.png'),
  'Mid-snow-fast-winds': require('../../../assets/icons/Mid-snow-fast-winds.png'),
};

export function Card({
  climate,
  temperature,
  feel,
  timeCourse,
  timeDay,
}: CardProps) {
  return (
    <Wrapper>
      <Container colors={['#AECDFF', '#5896FD']}>
        <Header>
          <IconHeader source={icons[climate]} />
          <InfoTemperature>
            <Temperature>{temperature}</Temperature>
            <Feels>{feel}</Feels>
          </InfoTemperature>
        </Header>
        <Main>
          <InfoClimate>
            <Climate>{timeCourse}</Climate>
            <TimeDay>{timeDay}</TimeDay>
          </InfoClimate>
          <IconMain source={icons['Mid-snow-fast-winds']} />
        </Main>
      </Container>
    </Wrapper>
  );
}
