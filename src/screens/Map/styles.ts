import {View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 0 0px;
`;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
