import mongoose from "mongoose";


const taskSchema = new mongoose.Schema({
    title: {type: String,required: true}, // El título es obligatorio por el "required: true"
    description: {type: String}, // La descripción es opcional, no tiene "required"
    completed: {type: Boolean, default: false} // Por defecto, las tareas no están completadas
});

const Task = mongoose.model('Task', taskSchema); // es un metodo model dentro de mongoose, recibe el nombre del modelo y el esquema

export default Task;