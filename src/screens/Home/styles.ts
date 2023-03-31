import {View, Text, TouchableOpacity} from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  height: 100%;
  width: 100%;
  padding: 0 30px;
`;

export const BallonGroup = styled(View)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
`;

export const BallonGroupHeader = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
`;
export const BallonGroupBody = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-bottom: 20px;
`;

export const BallonText = styled(Text)`
  color: #1a1026;
  font-size: 24px;
  font-weight: 800;
`;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const Link = styled(TouchableOpacity)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
`;

export const MiniCardGroup = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 90%;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const CardDayGroup = styled(View)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  margin-top: 20px;
  margin-bottom: 20px;
`;
