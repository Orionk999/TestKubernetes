import express, { Request, Response } from 'express';

import crypto from 'crypto';
import { Dispositivo } from './src/interfaces/dispositivo';
import { cifrarContrasena, clave } from './src/utils/cryptoUtils';
import { configureRoutes } from './routes';

const dispositivos: Dispositivo[] = [];

const app = express();
const PORT = 3000;

app.use(express.json());

configureRoutes(app);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});


