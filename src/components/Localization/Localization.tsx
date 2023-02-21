import React from 'react';
import {
  Container,
  TextLabelPrimary,
  TextGroup,
  TextLabelSpan,
  Icon,
} from './styles';
import {LocalizationProps} from './types';

const icon = require('../../../assets/icons/Localization-Map-3D.png');

export function Localization({
  city,
  state,
  weekDay,
  dayNumber,
  month,
}: LocalizationProps) {
  return (
    <Container>
      <TextGroup>
        <TextLabelPrimary>{city},</TextLabelPrimary>
        <TextLabelPrimary>{state}</TextLabelPrimary>
        <TextLabelSpan>{`${weekDay}, ${dayNumber} ${month}`}</TextLabelSpan>
      </TextGroup>
      <Icon source={icon} />
    </Container>
  );
}
