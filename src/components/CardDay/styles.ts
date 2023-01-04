import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  margin-bottom: 20px;
`;

export const DateLabel = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #5896fd;
`;

export const Temperature = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #8d8d8d;
`;

export const ClimateGroup = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 41px;
  height: 39px;
  resize-mode: contain;
`;

export const LabelClimate = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  color: #806ef8;
`;
