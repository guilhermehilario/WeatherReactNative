import {View, Text, Image} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 100%;
`;

export const TextGroup = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const TextLabelPrimary = styled(Text)`
  color: #454545;
  font-size: 24px;
  font-weight: bold;
`;

export const TextLabelSpan = styled(Text)`
  color: #8d8d8d;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const Icon = styled(Image)`
  width: 74px;
  height: 89px;
`;
