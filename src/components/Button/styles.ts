import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const ButtonView = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 12px;
`;

export const Icon = styled(Image)`
  width: 28px;
  height: 14px;
  resize-mode: contain;
`;
