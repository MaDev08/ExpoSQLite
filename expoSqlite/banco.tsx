import React from 'react';
import { Button, View } from 'react-native';
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

    //Cria uma função para o SELECT faz um botão e chama a função
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
        <View>
            <Button title="botão" onPress={() => criaDatabase()} />
            <Button
                title='Criar Tabela' onPress={() => { criaTabela() }}>
            </Button>
            <Button
                title='Inserir dados' onPress={() => { inserirDados() }}>
            </Button>
        </View>
    );
}

export default Banco; 
