import express from 'express';
import Task from '../models/Task.js';


const router = express.Router();

// Ruta de prueba
router.get('/', (req, res) => {
    res.send('Hola desde el archivo de rutas');
});


// Ruta para obtener todas las tareas
//READ (GET)
router.get('/tasks', async (req, res) => {
    try{
        const tareas = await Task.find(); // Estoy esperando a que se ejecute la consulta a la base de datos para obtener todas las tareas
        res.json(tareas); // Enviar las tareas obtenidas como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // En caso de error, enviar un mensaje de error con el código de estado 500 (Error Interno del Servidor)
    }
});


//Ruta para crear una nueva tarea
//CREATE (POST)
router.post('/tasks', async (req, res) => {
    try{
        const task = new Task(req.body); // Crear una nueva tarea con los datos del cuerpo de la solicitud
        await task.save(); // estoy esperando al request anterior, al tenerlo guardar la tarea en la base de datos
        res.status(201).json(task); // Enviar la tarea creada como respuesta con el código de estado 201 (Creado)   
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});



// Ruta para actualizar una tarea por ID
//UPDARE (PUT)

//Ruta para eliminar una tarea por ID
//DELETE (DELETE)



export default router;
