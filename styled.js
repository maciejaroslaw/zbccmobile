import styled from 'styled-components/native';
import { StyleSheet, Text, View, TextInput, KeyboardAvoidingView, Animated, TouchableOpacity} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #363062;
  align-items: center;
  justify-content: center;
`;
export const LoginBox = styled.KeyboardAvoidingView`
  width: 70%;
  color: #d8b9c3;
`
export const T = Animated.createAnimatedComponent(styled.Text`
  color: #d8b9c3;
  font-weight: 500;
`);

export const Btn = styled.TouchableOpacity`
  align-items: center;
  background-color: #d8b9c3;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 50%;
  margin: 0 auto;
  border-radius: 7px;
`