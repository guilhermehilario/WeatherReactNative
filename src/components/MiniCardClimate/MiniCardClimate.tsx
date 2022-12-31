import React, {useCallback} from 'react';
import {Ballon, Icon, Card, Span} from './styles';
import {MiniCardClimateProps} from './types';

const rain = require('../../../assets/icons/Big-rain-drops.png');
const humidity = require('../../../assets/icons/Big-snow.png');
const wind = require('../../../assets/icons/Moon-fast-wind.png');

export function MiniCardClimate({type, value}: MiniCardClimateProps) {
  const Content = useCallback(() => {
    if (type === 'rain' || type === 'humidity') {
      return (
        <Card>
          <Ballon>
            <Icon source={type === 'rain' ? rain : humidity} />
          </Ballon>
          <Span>{value}%</Span>
        </Card>
      );
    } else {
      return (
        <Card>
          <Ballon>
            <Icon source={wind} />
          </Ballon>
          <Span>{value}km/h</Span>
        </Card>
      );
    }
  }, [type, value]);

  return <Content />;
}
