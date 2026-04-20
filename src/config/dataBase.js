import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

const conectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('🙌🏻 Conexión a MongoDB exitosa');
    } catch (error) {
        console.error('☠️ Error al conectar a MongoDB:', error);
        process.exit(1); // Salir del proceso con un código de error
        }
}

export default conectDB; //es necesario exportar la función para poder usarla en app.js