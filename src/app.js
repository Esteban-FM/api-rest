import express from 'express';
import dotenv from 'dotenv';
import conectDB from './config/dataBase.js';
import taskRoutes from './routes/task.routes.js';

import path from 'path'; // Para trabajar con rutas de archivos como el local
import { fileURLToPath } from 'url'; // Para obtener la ruta del directorio actual


// Cargar variables de entorno
dotenv.config();

// Conectar a MongoDB, conecta a la base de datos antes de iniciar el servidor,
// si no se conecta, el servidor no se inicia
conectDB();

const PORT = process.env.PORT;

//iniciar el servidor
// const PORT = 3000;


const app = express();
const __filename = fileURLToPath(import.meta.url); // Obtener la ruta del archivo actual
const __dirname = path.dirname(__filename); // Obtener el directorio del archivo actual    




//? Middleware to parse JSON
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Servir archivos estáticos desde la carpeta "public"

//Ruta de prueba
// get es la peticion que hace el navegador hacia el servidor

// app.get('/', (req, res) => {
//     res.send('hola, clase continuando con nuestra api');
// });

//Ruta desde el archivo de rutas
app.use('/', taskRoutes); // Usar las rutas de tareas con el prefijo /api


app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

