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

import {icons3DLib} from '../../utilities/Icons3D';

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
          <IconHeader source={icons3DLib[climate]} />
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
          <IconMain source={icons3DLib['Mid-snow-fast-winds']} />
        </Main>
      </Container>
    </Wrapper>
  );
}
