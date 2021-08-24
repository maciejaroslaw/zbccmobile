import React from 'react'
import { View, Text } from 'react-native'
import styled from 'styled-components';
import {Colors, Fonts} from '../styles';
import Body from './Body';


const Container = styled.View`
  align-items: center;
  padding-top: 14%;
  height: 100%;
`;


const BodyScreen = () => {
    return (
        <Container style={{backgroundColor: Colors.mainPurple}}>
            <Body />
        </Container>
    )
};

export default BodyScreen;
