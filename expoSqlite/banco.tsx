import React from 'react';
import { Button, View } from 'react-native';
import * as SQLite from 'expo-sqlite';


const Banco = () => {

    async function criaDatabase() {
        const db = await SQLite.openDatabaseAsync('Pam2');
        if (db) {
            console.log('banco criado')
        } else{
            console.log('erro');
        }
    };

    return (
        <View>
            <Button title="botão" onPress={() => criaDatabase()} />
        </View>
    );
}

export default Banco; 