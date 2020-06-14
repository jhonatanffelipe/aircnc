import React, { useState } from 'react';
import { SafeAreaView, Text, StyleSheet, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native';


import api from '../services/api';

export default function Boking({ navigation }) {
    const [date, setDate] = useState('')
    const spot_id = navigation.getParam('id');


    async function handleSubmit() {
        const user_id = await AsyncStorage.getItem('user');

        await api.post(`/spots/${spot_id}/bookings`, {
            date
        }, {
            headers: { user_id }
        })
        Alert.alert('Solicitação de reserva enviada!');

        navigation.navigate('List');
    }

    function handleCancel() {
        navigation.navigate('List');
    }


    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.label}>Data de interesse:</Text>
            <TextInput
                style={styles.input}
                placeholder={'Qual data você que reservar?'}
                placeholderTextColor="#999"
                autoCapitalize='sentences'
                autoCorrect={false}
                value={date}
                onChangeText={setDate}
            />

            <TouchableOpacity onPress={handleSubmit} style={styles.button}>
                <Text style={styles.buttonText}>Solicitar reserva</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleCancel} style={[styles.button, styles.buttonCancel]}>
                <Text style={styles.buttonText}>Cancelar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0, //Para validar a SafeArea no android
        margin: 15,

    },

    label: {
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 8,
        marginTop: 20

    },

    form: {
        alignSelf: 'stretch',
        paddingHorizontal: 30,
        marginTop: 30
    },

    input: {
        borderWidth: 1,
        borderColor: '#ddd',
        paddingHorizontal: 20,
        fontSize: 16,
        color: '#444',
        height: 44,
        marginBottom: 20,
        borderRadius: 3
    },

    button: {
        height: 42,
        backgroundColor: '#f05a5b',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3,
        marginTop: 10
    },

    buttonCancel: {
        backgroundColor: '#CCC',
    },

    buttonText: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16
    }
});