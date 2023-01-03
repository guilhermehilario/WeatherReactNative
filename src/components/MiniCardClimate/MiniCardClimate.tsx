import React from 'react';
import {Ballon, Icon, Card, Span} from './styles';
import {MiniCardClimateProps} from './types';

const icons = {
  rain: require('../../../assets/icons/Big-rain-drops.png'),
  humidity: require('../../../assets/icons/Big-snow.png'),
  wind: require('../../../assets/icons/Moon-fast-wind.png'),
};

const unit = {
  rain: '%',
  humidity: '%',
  wind: 'km/h',
};

export function MiniCardClimate({type, value, opacity}: MiniCardClimateProps) {
  return (
    <Card>
      <Ballon hasOpacity={Boolean(opacity)}>
        <Icon source={icons[type]} />
      </Ballon>
      <Span>{`${value} ${unit[type]}`}</Span>
    </Card>
  );
}
