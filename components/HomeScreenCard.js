import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import 'react-native-gesture-handler';
import {Cards, Fonts, Colors} from '../styles';
import { StyleSheet } from 'react-native';

import { AuthContext } from './AuthContext.js';
import { useNavigation } from '@react-navigation/native';


const Card = (props) => {
    // const { signIn, signOut } = React.useContext(AuthContext);
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardTitle}>{props.text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        ...Cards.cardPrimary,
    },
    cardTitle: {
        ...Fonts.large,
        ...Fonts.right400,
        color: Colors.mainPurple,
        position: 'absolute',
        padding: 4,
        bottom: '6%',
        right: '4%',
    }
});

export default Card;

