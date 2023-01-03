import {View, Image, Text} from 'react-native';
import styled from 'styled-components/native';

export const Card = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Ballon = styled(View)<{hasOpacity: boolean}>`
  background-color: ${({hasOpacity}) => (hasOpacity ? '#ffffff33' : '#ffffff')};
  border-radius: 20px;
  padding: 10px;
  width: 70px;
  height: 70px;
`;

export const Span = styled(Text)`
  margin-top: 4px;
  font-size: 18px;
  font-weight: bold;
`;

export const Icon = styled(Image)`
  width: 47px;
  height: 45px;
`;
