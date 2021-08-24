import { View, Text } from 'react-native';
import React, { useState, useEffect, useMemo } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import { Container, T } from '../styled.js';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen.js';
import HomeScreen from '../components/HomeScreen.js';
import { useFonts, Righteous_400Regular } from '@expo-google-fonts/righteous';
import BodyScreen from '../components/BodyScreen.js';
import { useSelector } from 'react-redux';
import { store } from '../store/store.js';

const Stack = createStackNavigator();


export default function Main() {
    let [ fontsLoaded ] = useFonts({
        Righteous_400Regular,
    })

    const s = store.getState();
    const token = useSelector((state)=>state.user.token);

    const [isLoading, setIsLoading] = useState(false);

    // const authContext = useMemo(() => ({
    //   signIn: (t) => {
    //     setIsLoading(false);
    //     setToken(t);
    //   },
    //   signOut: () => {
    //     setToken(null);
    //     setIsLoading(false);
    //   },
    //   handleLoading: (s) => {
    //     setIsLoading(s);
    //   }
    // }));

    const loading = (s) => {
        setIsLoading(s);
    };

    // const checkIfToken = () => {
    //   SecureStore.getItemAsync("token").then(token=>{
    //     setToken(token);
    //     setIsLoading(false);
    //   })
    // }

    useEffect(()=>{
        console.log(token);
    }, []);

    if(isLoading || !fontsLoaded){
    return(
        <Container>
        <ActivityIndicator color="#d8b9c3" size="large" />
        </Container>
    )

    }
    return (
        <NavigationContainer>
            { token == null ?
              (
                <LoginScreen loading={loading} />
                )
                :
                (
                <Stack.Navigator screenOptions={{headerShown: false}}>
                  <Stack.Screen name="Main" component={HomeScreen} />
                  <Stack.Screen name="Body" component={BodyScreen} />
                </Stack.Navigator>
              )
            }
      </NavigationContainer>
    )
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
