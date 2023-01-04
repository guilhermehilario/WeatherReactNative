import React from 'react';
import {iconsLib} from '../../utilities';
import {
  Container,
  DateLabel,
  Temperature,
  ClimateGroup,
  Icon,
  LabelClimate,
} from './styles';
import {CardDayProps} from './types';

export function CardDay({
  dayNumber,
  month,
  weekDay,
  temperature,
  iconClimate,
  climate,
}: CardDayProps) {
  return (
    <Container>
      <DateLabel>{`${dayNumber} ${month}, ${weekDay}`}</DateLabel>
      <Temperature>{temperature}</Temperature>

      <ClimateGroup>
        <Icon source={iconsLib[iconClimate]} />
        <LabelClimate>{climate}</LabelClimate>
      </ClimateGroup>
    </Container>
  );
}
