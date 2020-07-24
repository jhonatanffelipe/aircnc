import React, { useState, useEffect } from 'react';
import { withNavigation } from 'react-navigation';

import socketio from 'socket.io-client';
import { SafeAreaView, ScrollView, AsyncStorage, Image, StyleSheet, Platform, Alert, Text, View } from 'react-native';

import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function List({ navigation }) {
    const [techs, setTechs] = useState([]);

    function goToLogin() {
        navigation.navigate('Login');
    }

    useEffect(() => {
        AsyncStorage.getItem('user').then(user_id => {
            const socket = socketio('http://192.168.0.12:3333', {
                query: { user_id }
            })

            socket.on('booking_response', booking => {
                Alert.alert(`Sua reserva em ${booking.spot.company} em ${booking.date} foi ${booking.approved ? 'APROVADA' : 'REJEITADA'}`);
            })
        })
    }, []);

    useEffect(() => {
        AsyncStorage.getItem('techs').then(storagesTechs => {
            const techsArray = storagesTechs.split(',').map(tech => tech.trim());
            setTechs(techsArray);
        })
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Image style={styles.logo} source={logo} />
                <TouchableOpacity onPress={goToLogin}>
                    <Text style={styles.back}>Voltar</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                {techs.map(tech => <SpotList key={tech} tech={tech} />)}
            </ScrollView>

        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0 //Para validar a SafeArea no android
    },

    logo: {
        height: 32,
        resizeMode: "contain",
        alignSelf: "center",
        marginTop: 25,
    },

    header: {
        paddingRight: 15,
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-between",
    },

    back: {
        marginTop: 33,
        color: '#444',
    }
});