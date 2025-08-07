# Używamy oficjalnego obrazu Node.js
FROM node:18

# Ustawiamy katalog roboczy
WORKDIR /app

# Kopiujemy pliki aplikacji
COPY . .

# Instalujemy prosty serwer HTTP
RUN npm install -g serve

# Ustaw zmienną środowiskową dla portu
ENV PORT=3000

# Domyślne polecenie - serwowanie zawartości katalogu /app
CMD ["serve", ".", "-l", "3000"]
