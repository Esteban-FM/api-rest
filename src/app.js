import express from 'express';
import dotenv from 'dotenv';
import conectDB from './config/dataBase.js';

// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB, conecta a la base de datos antes de iniciar el servidor,
// si no se conecta, el servidor no se inicia
conectDB();

const PORT = process.env.PORT;

//iniciar el servidor
// const PORT = 3000;


const app = express();

//? Middleware to parse JSON
app.use(express.json());


//Ruta de prueba
// get es la peticion que hace el navegador hacia el servidor
app.get('/', (req, res) => {
    res.send('hola, clase continuando con nuestra api');
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

