import mysql from 'promise-mysql';
import dotenv from 'dotenv';

dotenv.config();

const config = {
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
};

const conectarDB = async () => {
    try {
        const connection = await mysql.createConnection(config);
        console.log(`MySQL conectado`);
        return connection; 
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        throw error; 
    }
};

export default conectarDB;
