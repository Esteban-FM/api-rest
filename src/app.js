import express from 'express';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const PORT = process.env.PORT;

//iniciar el servidor
// const PORT = 3000;


const app = express();

// Middleware to parse JSON
app.use(express.json());


//Ruta de prueba
// get es la peticion que hace el navegador hacia el servidor
app.get('/', (req, res) => {
    res.send('hola!')
});


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

