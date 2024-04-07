import { Request, Response } from 'express';
//import { DispositivoModel } from '../models/dispositivoModel';
import { cifrarContrasena, clave, descifrarContrasena } from '../utils/cryptoUtils';
import { Dispositivo } from '../interfaces/dispositivo';
import { v4 as uuidv4 } from 'uuid';
const dispositivos: Dispositivo[] = [];

export class DispositivoController {
  async getAll(req: Request, res: Response) {
    try {

      //const dispositivos = await DispositivoModel.find({}, '-contrasena');
      res.json(dispositivos);
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener los dispositivos', error });
    }
    
  }

  async getById(req: Request, res: Response) {
    try {
      //const dispositivo = await DispositivoModel.findById(id);
      const dispositivo = dispositivos.find((d) => d.id === req.params.id);
      if (dispositivo) {
        const claveSecreta = Buffer.from('claveSecreta', 'utf8'); 
        dispositivo.contrasena = descifrarContrasena(dispositivo.contrasena, clave);
        res.json(dispositivo);
        
      } else {
        return res.status(404).json({ message: 'Dispositivo no encontrado' });
      }
      
    } catch (error) {
      res.status(500).json({ message: 'Error al obtener el dispositivo', error });
    }
  }

  async create(req: Request, res: Response) {

    try {
      const { nombre, modelo, almacenamiento, contrasena } = req.body as Dispositivo;
      const contrasenaCifrada = cifrarContrasena(contrasena, clave);
      const newDispositivo: Dispositivo = {
        id: uuidv4(), 
        nombre,
        modelo,
        almacenamiento,
        contrasena: contrasenaCifrada, 
      };
      // const dispositivo = new DispositivoModel(newDispositivo);
      // await dispositivo.save();

      dispositivos.push(newDispositivo);
      res.status(200).json(newDispositivo);
    } catch (error) {
      res.status(500).json({ message: 'Error al guardar el dispositivo', error });
    }
  }


  
  async update(req: Request, res: Response) {
    const id = req.params.id;
    const dispositivoActualizado: Dispositivo = req.body;
  

  if (!dispositivoActualizado.nombre || !dispositivoActualizado.modelo || !dispositivoActualizado.almacenamiento || !dispositivoActualizado.contrasena) {
    res.status(400).send('Datos incompletos');
    return;
  }

  try {
    const dispositivoIndex = dispositivos.findIndex((d) => d.id === req.params.id);
    if (dispositivoIndex === -1) {
      return res.status(404).json({ message: 'Dispositivo no encontrado' });
    }
    const { nombre, modelo, almacenamiento, contrasena } = req.body as Dispositivo;
    const contrasenaCifrada = cifrarContrasena(contrasena, clave);

    //const dispositivo = await DispositivoModel.findByIdAndUpdate(id, dispositivoActualizado, { new: true });

    dispositivos[dispositivoIndex] = {
      ...dispositivos[dispositivoIndex],
      nombre,
      modelo,
      almacenamiento,
      contrasena: contrasenaCifrada,
    };
    res.json(dispositivos[dispositivoIndex]);
  } catch (error) {
    res.status(500).json({ message: 'Error al actualizar el dispositivo', error });
  }
  }

  async delete(req: Request, res: Response) {
    try {

      //const dispositivoEliminado = await DispositivoModel.findByIdAndDelete(req.params.id);
      const dispositivoIndex = dispositivos.findIndex((d) => d.id === req.params.id);
      if (dispositivoIndex === -1) {
        return res.status(404).json({ message: 'Dispositivo no encontrado' });
      }
      dispositivos.splice(dispositivoIndex, 1);
      res.json({ message: 'Dispositivo eliminado correctamente' });
    } catch (error) {
      res.status(500).json({ message: 'Error al eliminar el dispositivo', error });
    }
  }
}

