import crypto from 'crypto';

export const clave = crypto.randomBytes(32);

export function cifrarContrasena(contrasena: string, clave: Buffer): string {
  const iv = crypto.randomBytes(16); 
  const cifrador = crypto.createCipheriv('aes-256-cbc', clave, iv);
  let contrasenaCifrada = cifrador.update(contrasena, 'utf8', 'hex');
  contrasenaCifrada += cifrador.final('hex');
  return iv.toString('hex') + ':' + contrasenaCifrada;
}

export function descifrarContrasena(contrasenaCifrada: string, clave: Buffer): string {
  const [ivStr, contrasenaCifradaHex] = contrasenaCifrada.split(':');
  const iv = Buffer.from(ivStr, 'hex');
  const contrasenaCifradaBuffer = Buffer.from(contrasenaCifradaHex, 'hex');

  const descifrador = crypto.createDecipheriv('aes-256-cbc', clave, iv);

  let contrasenaDescifrada = descifrador.update(contrasenaCifradaBuffer.toString('hex'), 'hex', 'utf8');
  contrasenaDescifrada += descifrador.final('utf8');

  return contrasenaDescifrada;
}
