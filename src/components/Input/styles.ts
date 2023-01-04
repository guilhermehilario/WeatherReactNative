import {View, Image, TextInput} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  background-color: #ffffff;
  border-radius: 50px;
  padding: 0 10px;

  width: 215px;

  margin-bottom: 20px;
`;

export const InputText = styled(TextInput).attrs({
  placeholderTextColor: '#8d8d8d',
})`
  background-color: transparent;
  width: 85%;
  padding: 5px 0;
  color: #000;
`;

export const Icon = styled(Image)`
  width: 20px;
  height: 25px;
  resize-mode: contain;
`;
