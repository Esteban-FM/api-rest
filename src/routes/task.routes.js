import express from 'express';


const router = express.Router();

// Ruta de prueba para tareas
router.get('/tasks', (req, res) => {
    res.send('Hola desde el archivo de rutas');
});

export default router;