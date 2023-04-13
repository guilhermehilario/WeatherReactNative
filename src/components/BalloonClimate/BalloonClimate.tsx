import React, {useCallback} from 'react';
import {
  Solid,
  Day,
  Hour,
  Icon,
  Temperature,
  WeekDay,
  Gradient,
  styles,
} from './styles';

const cloud3 = require('../../../assets/icons/Cloud-zap.png');

import {BalloonClimateProps, ContainerProps} from './types';
import {View} from 'react-native';

export function BalloonClimate({
  variant,
  active = false,
  info,
}: BalloonClimateProps) {
  const Container = useCallback(
    ({children}: ContainerProps) => {
      if (variant === 'day' && active) {
        return <Solid style={styles.shadow}>{children}</Solid>;
      } else if (variant === 'day' && !active) {
        return (
          <View style={styles.shadow}>
            <Gradient colors={['#AECDFF', '#5896FD']}>{children}</Gradient>
          </View>
        );
      } else if (variant === 'hour' && active) {
        return (
          <View style={styles.shadow}>
            <Gradient colors={['#B0A4FF', '#806EF8']}>{children}</Gradient>
          </View>
        );
      } else {
        return <Solid style={styles.shadow}>{children}</Solid>;
      }
    },
    [variant, active],
  );

  const Content = useCallback(() => {
    if (variant === 'day') {
      const {day, weekDay} = info;

      return (
        <>
          <Icon source={cloud3} />
          <Day active={active}>{day}</Day>
          <WeekDay active={active}> {weekDay} </WeekDay>
        </>
      );
    } else {
      const {hour, temperature} = info;

      return (
        <>
          <Hour active={active}>{hour}</Hour>
          <Icon source={cloud3} />
          <Temperature active={active}> {temperature} </Temperature>
        </>
      );
    }
  }, [variant, info, active]);

  return (
    <Container>
      <Content />
    </Container>
  );
}
