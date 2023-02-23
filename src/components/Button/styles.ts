import {Image, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const ButtonView = styled(TouchableOpacity)`
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  width: 40px;
  height: 40px;
  border-radius: 12px;

  box-shadow: 10px 5px 5px black;
`;

export const Icon = styled(Image)`
  width: 28px;
  height: 14px;
  resize-mode: contain;
`;
