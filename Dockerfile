FROM alpine:latest

# Install Node.js and npm
RUN apk add --no-cache nodejs npm

WORKDIR /app

COPY package*.json ./

RUN cat package.json
RUN cat package-lock.json

RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
