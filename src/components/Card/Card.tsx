import React from 'react';

import {
  Wrapper,
  Container,
  Header,
  Main,
  Bottom,
  IconHeader,
  InfoTemperature,
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
  children,
  icon,
  morning,
}: CardProps) {
  const colors = {
    morning: ['#AECDFF', '#5896FD'],
    night: ['#B0A4FF', '#806EF8'],
  };

  const hour = morning ? colors.morning : colors.night;

  return (
    <Wrapper>
      <Container colors={hour}>
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
          {icon ? <IconMain source={icons3DLib[icon]} /> : <></>}
        </Main>
        <Bottom>{children}</Bottom>
      </Container>
    </Wrapper>
  );
}
