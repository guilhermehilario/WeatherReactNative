import {View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  padding: 0 30px;
`;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Body = styled(View)`
  height: 100%;
`;

export const Bottom = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const BallonGroup = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
`;
