import React, {useState} from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styled from 'styled-components';
import {Colors, Fonts, Buttons} from '../styles';
import Body from './Body';
import { StyleSheet } from 'react-native';


const Container = styled.View`
  align-items: center;
  padding-top: 5%;
  height: 100%;
`;


const BodyScreen = () => {
    const [dataToSend, setDataToSend] = useState(['']);

    const styles = StyleSheet.create({
        btn: {
            ...Buttons.btnPrimary,
            position: 'absolute',
            bottom: '10%',
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        }
    })
    const getBodyData = (data) => {
        setDataToSend(data);
    }
    const sendData = () => {
        console.log(dataToSend);
    }
    return (
        <Container style={{backgroundColor: Colors.mainPurple, position: 'relative'}}>
            <Body getBodyData={getBodyData} />
            <TouchableOpacity onPress={() => {
                sendData();
            }} style={styles.btn}>
                <Text style={Buttons.btnPrimaryText}>Zapisz</Text>
            </TouchableOpacity>
        </Container>
    )
};

export default BodyScreen;
