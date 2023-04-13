import {Image, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

export const Solid = styled(View)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #fff;
  width: 49px;
  height: 114px;
  border-radius: 50px;
`;

export const Gradient = styled(LinearGradient)`
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 49px;
  height: 114px;
  border-radius: 50px;
`;

export const Hour = styled(Text)<{active: boolean}>`
  margin-top: 6px;
  font-weight: 500;
  font-size: 12px;
  color: ${({active}) => (active ? '#FFFFFF' : '#8d8d8d')};
`;

export const Temperature = styled(Text)<{active: boolean}>`
  margin-top: 6px;
  font-weight: bold;
  font-size: 20px;
  color: ${({active}) => (active ? '#FFFFFF' : '#8d8d8d')};
`;

export const Icon = styled(Image)`
  margin-top: 6px;
  width: 30px;
  height: 28px;
`;

export const Day = styled(Text)<{active: boolean}>`
  margin-top: 6px;
  font-weight: bold;
  font-size: 20px;
  line-height: 24px;
  color: ${({active}) => (active ? '#806EF8' : '#FFFFFF')};
`;

export const WeekDay = styled(Text)<{active: boolean}>`
  margin-top: 6px;
  font-size: 12px;
  font-weight: 500;
  color: ${({active}) => (active ? '#806EF8' : '#FFFFFF')};
`;

export const styles = StyleSheet.create({
  shadow: {
    elevation: 4,
  },
});
