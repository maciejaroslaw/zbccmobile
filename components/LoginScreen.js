import React, { useState, useEffect, useRef, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Animated, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Svg, {Path} from 'react-native-svg';
import axios from 'axios';
import { Container, LoginBox, T, Btn} from '../styled.js';
import 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/actions';
import { AuthContext } from './AuthContext.js';

const LabelInput = (props) => {
    const [isFocused, handleIsFocused] = useState(false);
    const animatedIsFocused = useRef(new Animated.Value(props.value === '' ? 0:1)).current;
    
    useEffect(() => {
      Animated.timing(animatedIsFocused, {
        toValue: (isFocused || props.value !== '') ? 0 : 1,
        duration: 200,
        useNativeDriver: false,
      }).start();
    })
  
    const labelStyle = {
      position: 'absolute',
      left: 0,
      top: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [-20, 5],
      }),
      fontSize: animatedIsFocused.interpolate({
        inputRange: [0, 1],
        outputRange: [14, 14],
      })
    }
    const styles = StyleSheet.create({
        input: {
          height: 26,
          fontSize: 20,
          borderBottomWidth: 2,
          borderBottomColor: '#d8b9c3',
          color: '#d8b9c3',
        }
      });
  
  
    return (
      <View {...props}>
        <T style={labelStyle}>{props.label}</T>
        <TextInput
          onFocus={()=>handleIsFocused(true)}
          onBlur={()=>handleIsFocused(false)}
          {...props} 
          style={styles.input} 
          secureTextEntry={props.isPsd} 
          label="Login"
          autoCorrect={false}
          spellCheck={false}
         />
      </View>
    )
};

const LoginScreen = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [psswdValue, setPsswdValue] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [svgFill, setSvgFill] = useState('#d8b9c3');

    const dispatch = useDispatch();

    // const { signIn, signOut, handleLoading } = useContext(AuthContext);

    const styles = StyleSheet.create({
        test: {
          shadowColor: "#ffffff",
          shadowOffset: {
            width: 0,
            height: 5,
          },
          shadowOpacity: 0.34,
          shadowRadius: 6.27,
      
          elevation: 10,
        }
    });

    const sendLoginRequest = () => {
        Keyboard.dismiss;
        props.loading(true);
        axios.post("https://zbccbeam.herokuapp.com/api/login", {
        email: inputValue,
        password: psswdValue,
        },{
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",   
        },
        }).then(response=>{
            SecureStore.setItemAsync("token", response.data.token);
            dispatch(login(response.data.user, response.data.token));
            props.loading(false);
        }).catch(err=>{
            console.log(err);
        });
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} >
            <Container>
                <LoginBox behavior={"padding"} style={styles.test}>
                    <Svg style={{marginBottom: 54, marginLeft: 'auto', marginRight: 'auto'}} fill={svgFill} width='50%' height='100' viewBox='-15 0 100 100'><Path
                    d='M15.92 68.5l8.8 12.546 3.97 13.984-9.254-7.38-4.622-15.848zm27.1 0l-8.8 12.546-3.976 13.988 9.254-7.38 4.622-15.848zm6.11-27.775l.108-11.775-21.16-14.742L8.123 26.133 8.09 40.19l-3.24.215 1.462 9.732 5.208 1.81 2.36 11.63 9.72 11.018 10.856-.324 9.56-10.37 1.918-11.952 5.207-1.81 1.342-9.517zm-43.085-1.84l-.257-13.82L28.226 11.9l23.618 15.755-.216 10.37 4.976-17.085L42.556 2.376 25.49 0 10.803 3.673.002 24.415z'/></Svg>
                <Text>{errMsg}</Text>
                <LabelInput
                    label="Email"
                    value={inputValue}
                    onChangeText={(newText) => setInputValue(newText)}
                    isPsd={false}
                />
                <LabelInput
                    style={{marginTop: 25}}
                    label="Hasło"
                    value={psswdValue}
                    onChangeText={(newPsswd) => setPsswdValue(newPsswd)}
                    isPsd={true}
                />
                <Btn onPress={() => sendLoginRequest()} style={{marginTop: 50}}>
                    <Text>
                    Zaloguj
                    </Text>
                </Btn>
                </LoginBox>
            </Container>
        </TouchableWithoutFeedback>
    );
};

export default LoginScreen;