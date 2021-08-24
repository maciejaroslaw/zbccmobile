import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import styled from 'styled-components';
import { Fonts, Colors} from '../styles';
import { StyleSheet } from 'react-native';
import Card from './HomeScreenCard.js';

import { AuthContext } from './AuthContext.js';

const Container = styled.View`
  align-items: center;
  padding-top: 14%;
  height: 100%;
`;

const HomeScreen = ({navigation}) => {
    return (
      <Container style={{backgroundColor: Colors.mainPurple }}>
        <View style={{width: '95%'}}>
          <Text style={styles.header}>Witaj Maciej</Text>
        </View>
        <Card text="Jak się czujesz?" goTo="Body"/>
        <Card text="Wyloguj" />
      </Container>
    )
};

const styles = StyleSheet.create({
  header: {
    ...Fonts.large,
    ...Fonts.right400,
    color: Colors.pastelPink,
    marginBottom: 30,
    textAlign: 'left',
  },
})

export default HomeScreen;