import {Image, View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  padding-top: 24px;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const Container = styled(LinearGradient)`
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  border-radius: 24px;
  width: 100%;
`;

export const Header = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 5px 15px;
  width: 100%;
`;

export const Bottom = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 10px;
  width: 100%;
`;

export const InfoTemperature = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Temperature = styled(Text)`
  font-size: 64px;
  color: #ffffff;
  font-weight: bold;
  margin-top: -15px;
`;

export const Feels = styled(Text)`
  margin-top: -10px;
  font-size: 16px;
  color: #ffffff;
`;

export const IconHeader = styled(Image)`
  width: 137px;
  height: 118px;
  resize-mode: contain;
  margin-top: -40px;
`;

export const Main = styled(View)`
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  margin-top: 15px;
  padding: 0 15px;
  width: 100%;
`;

export const InfoClimate = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Climate = styled(Text)`
  font-size: 20px;
  color: #ffffff;
  font-weight: bold;
`;

export const TimeDay = styled(Text)`
  font-size: 16px;
  color: #ffffff;
`;

export const IconMain = styled(Image)`
  width: 80px;
  height: 60px;
  resize-mode: contain;
`;
