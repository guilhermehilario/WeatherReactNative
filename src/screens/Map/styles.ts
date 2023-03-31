import {View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 0 30px;
`;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Body = styled(View)`
  height: 70%;
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

export const BallonSeparators = styled(View)`
  margin-left: 10px;
`;
