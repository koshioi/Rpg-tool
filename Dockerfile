# Minimalny obraz Node.js
FROM node:18-alpine

# Katalog roboczy
WORKDIR /app

# Zależności
COPY package*.json ./
RUN npm install --only=production

# Kod aplikacji
COPY . .

# Port aplikacji
ENV PORT=3000
EXPOSE 3000

# Start
CMD ["node", "server.js"]
