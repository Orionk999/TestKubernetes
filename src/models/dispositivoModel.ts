
import mongoose from 'mongoose';

const DispositivoSchema = new mongoose.Schema({
  nombre: { type: String,  },
  modelo: { type: String, },
  almacenamiento: { type: Number,  },
  contrasena: { type: String,  },
});

export const DispositivoModel = mongoose.model('Dispositivo', DispositivoSchema);
