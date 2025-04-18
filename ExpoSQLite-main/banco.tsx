import React from 'react';
import { Button, View, StyleSheet} from 'react-native';
import * as SQLite from 'expo-sqlite';


const Banco = () => {

    async function criaDatabase() {
        const db = await SQLite.openDatabaseAsync('Pam2');
        if (db) {
            console.log('banco criado')
        } else {
            console.log('erro');
        }
        return db;
    };

    async function criaTabela() {
        try {
            let db = await criaDatabase();
            await db.execAsync(`
            PRAGMA journal_mode = WAL;
            CREATE TABLE IF NOT EXISTS tb_usuario
            (id INTEGER PRIMARY KEY NOT NULL, nome TEXT); `);

            console.log('Tabela criada');
        } catch (E) {
            console.log("Erro");
        }
    };

    //Cria uma função para o SELECT faz um botão e chama a função, para ler os dados
    async function inserirDados() {
        try {
            let db = await criaDatabase();
            await db.execAsync(`INSERT INTO tb_usuario (id, nome) VALUES (1, 'Zeca');`);

            console.log('Dados inseridos');
        } catch (E) {
            console.log("Erro");
        }
    }




    return (
        <View style={styles.container}>
            <Button title="Open Database" onPress={criaDatabase} />
            <Button title="Create Table" onPress={criaTabela} />
            <Button title="Insert Data" onPress={inserirDados} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
});
export default Banco; 
