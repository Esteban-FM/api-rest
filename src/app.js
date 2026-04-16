import express from 'express';

const app = express();


// Middleware to parse JSON
app.use(express.json());


//Ruta de prueba
// get es la peticion que hace el navegador hacia el servidor
app.get('/', (req, res) => {
    res.send('hola!')
});

//iniciar el servidor
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});

