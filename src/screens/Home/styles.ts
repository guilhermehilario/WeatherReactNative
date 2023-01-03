import {View} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

export const BallonGroup = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 90%;
  margin-bottom: 20px;
`;

export const MiniCardGroup = styled(View)`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
