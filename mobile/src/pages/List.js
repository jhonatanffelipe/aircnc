import React, { useState, useEffect } from 'react';
import socketio, { Socket } from 'socket.io-client';
import { SafeAreaView, ScrollView, AsyncStorage, Image, StyleSheet, Platform, Alert } from 'react-native';

import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';

export default function List() {
    const [techs, setTechs] = useState([]);

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
            <Image style={styles.logo} source={logo} />

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
    }
});