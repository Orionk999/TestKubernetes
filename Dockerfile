# Usa una imagen base con Node.js instalado
FROM node:latest

# Establece el directorio de trabajo en /app
WORKDIR /app

# Copia el archivo package.json y package-lock.json si existen
COPY package*.json ./

# Imprime el contenido del archivo package.json
RUN cat package.json

# Imprime el contenido del archivo package-lock.json
RUN cat package-lock.json

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila la aplicación TypeScript
RUN npm run build

# Exponer el puerto en el que se ejecuta la aplicación
EXPOSE 3000

# Comando por defecto para iniciar la aplicación
CMD ["node", "dist/index.js"]
