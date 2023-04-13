import React from 'react';
import {View} from 'react-native';

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
  styles,
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
      <View style={styles.shadow}>
        <Container colors={hour}>
          <Header>
            <InfoTemperature>
              <Temperature>{temperature}</Temperature>
              <Feels>{feel}</Feels>
            </InfoTemperature>
          </Header>
          <Main>
            {icon ? (
              <>
                <InfoClimate>
                  <Climate>{timeCourse}</Climate>
                  <TimeDay>{timeDay}</TimeDay>
                </InfoClimate>
                <IconMain source={icons3DLib[icon]} />
              </>
            ) : (
              <></>
            )}
          </Main>
          <Bottom>{children}</Bottom>
        </Container>
      </View>
      <IconHeader source={icons3DLib[climate]} />
    </Wrapper>
  );
}
