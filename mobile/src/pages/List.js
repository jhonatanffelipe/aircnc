import React, { useState, useEffect } from 'react';
import { SafeAreaView, ScrollView, AsyncStorage, Image, StyleSheet, Platform } from 'react-native';

import SpotList from '../components/SpotList';
import logo from '../assets/logo.png';

export default function List() {
    const [techs, setTechs] = useState([]);

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