
import mongoose from 'mongoose';

export function configureDatabase() {
  const mongoURI = 'mongodb://10.244.0.228:27017/dispositivosDB'; //Ruta en Kubernetes
  // const mongoURI = 'mongodb://127.0.0.1:27017/dispositivosDB';//Ruta en el pc Local
  mongoose.connect(mongoURI);
  const db = mongoose.connection;
  db.on('error', (error) => console.error(error));
  db.once('open', () => console.log('Conectado a MongoDB'));
}
