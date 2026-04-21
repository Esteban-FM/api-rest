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


// Ruta para obtener una tarea por ID
router.get('/tasks/:id', async (req, res) => { // El :id es un parámetro de ruta que representa el ID de la tarea que queremos obtener
    try {
        const task = await Task.findById(req.params.id); // Estoy esperando a que se ejecute la consulta a la base de datos para obtener la tarea por su ID
        if (!task) { //si task es nulo o undefined, significa que no se encontró la tarea con el ID proporcionado, por lo que el if se ejecuta si (!task) que significa "false"
            return res.status(404).json({ message: 'Tarea no encontrada' }); // Si no se encuentra la tarea, enviar un mensaje de error con el código de estado 404 (No Encontrado)
        }
        res.json(task); // Enviar la tarea obtenida como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // En caso de error, enviar un mensaje de error con el código de estado 500 (Error Interno del Servidor)
    }
});



// Ruta para actualizar una tarea por ID
//UPDATE (PUT)
router.put('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true }); // Estoy esperando a que se ejecute la consulta a la base de datos para actualizar la tarea por su ID, el { new: true } es para que me devuelva la tarea actualizada
        if (!task) { //si task es nulo o undefined, significa que no se encontró la tarea con el ID proporcionado, por lo que el if se ejecuta si (!task) que significa "false"
            return res.status(404).json({ message: 'Tarea no encontrada' }); // Si no se encuentra la tarea, enviar un mensaje de error con el código de estado 404 (No Encontrado)
        }
        res.json(task); // Enviar la tarea actualizada como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // En caso de error, enviar un mensaje de error con el código de estado 500 (Error Interno del Servidor)
    }
});





//Ruta para eliminar una tarea por ID
//DELETE (DELETE)
router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id); // Estoy esperando a que se ejecute la consulta a la base de datos para eliminar la tarea por su ID
        if (!task) { //si task es nulo o undefined, significa que no se encontró la tarea con el ID proporcionado, por lo que el if se ejecuta si (!task) que significa "false"
            return res.status(404).json({ message: 'Tarea no encontrada' }); // Si no se encuentra la tarea, enviar un mensaje de error con el código de estado 404 (No Encontrado)
        }
        res.json({ message: 'Tarea eliminada' }); // Enviar un mensaje de éxito como respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ message: error.message }); // En caso de error, enviar un mensaje de error con el código de estado 500 (Error Interno del Servidor)
    }
});



export default router;
