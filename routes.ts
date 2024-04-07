import express from 'express';
import { DispositivoController } from './src/controllers/dispositivoController';

export function configureRoutes(app: express.Application) {
  const dispositivoController = new DispositivoController();

  app.get('/dispositivos', dispositivoController.getAll);
  app.get('/dispositivos/:id', dispositivoController.getById);
  app.post('/dispositivos', dispositivoController.create);
  app.put('/dispositivos/:id', dispositivoController.update);
  app.delete('/dispositivos/:id', dispositivoController.delete);
}
