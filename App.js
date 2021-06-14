import React, { Component, useState, useEffect, useMemo } from 'react';
import { StyleSheet, ActivityIndicator, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import axios from 'axios';
import styled from 'styled-components/native';
import { Container, LoginBox, T, Btn} from './styled.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as SecureStore from 'expo-secure-store';
import { TouchableOpacity } from 'react-native-gesture-handler';
import LoginScreen from './components/LoginScreen.js';
import { AuthContext } from './components/AuthContext.js';

const Stack = createStackNavigator();



const HomeScreen = ({navigation}) => {
  const { signOut } = React.useContext(AuthContext);
  return (
    <Container>
      <T>A KURWA</T>
      <TouchableOpacity
        onPress={() => {signOut()}}
      >
        <T>LECIMY KURWA DALEJ</T>
      </TouchableOpacity>
    </Container>
  )
};

const TabOne = ({navigation}) => {
  return(
    <Container>
      <TouchableOpacity onPress={() => {SecureStore.deleteItemAsync("token"); navigation.navigate("Login")}}>
        <T>Wyloguj</T>
      </TouchableOpacity>
    </Container>
  )
};

export default function App({navigation}) {

  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const authContext = useMemo(() => ({
    signIn: (t) => {
      setIsLoading(false);
      setToken(t);
    },
    signOut: () => {
      setToken(null);
      setIsLoading(false);
    }
  }))

  useEffect(()=>{
    setTimeout(function(){
      setIsLoading(false)
    }, 1000);

  }, []);

  if(isLoading){
    return(
      <Container>
        <ActivityIndicator color="#d8b9c3" size="large" />
      </Container>
    )
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            { token == null ?
              (
                  <Stack.Screen name="SignIn" component={LoginScreen} />
                )
                :
                (
                  <Stack.Screen name="Main" component={HomeScreen} />
              )
            }
          </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'royalblue',
    alignItems: 'center',
    // justifyContent: 'center',
    paddingTop: 60,
  },
  test: {
    shadowColor: "#ffffff",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  loginContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 26,
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: '#d8b9c3',
    color: '#d8b9c3',
  },  
  tekstkurwa: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#fff',
  }
});
