# Panel z zakładkami (dynamiczny backend + Docker)

Interfejs panelu po prawej stronie oraz proste, dynamiczne API w Express (Node.js).
Przygotowane do deploymentu jako **Docker** (np. Render Web Service w trybie Docker).

## Struktura
```
panel-app-dynamic-docker/
├─ public/
│  ├─ index.html
│  ├─ style.css
│  └─ script.js
├─ server.js
├─ package.json
├─ Dockerfile
└─ .dockerignore
```

## Uruchomienie lokalne (bez Dockera)
```bash
npm install
npm start
# Aplikacja: http://localhost:3000
```

## Uruchomienie lokalne (Docker)
```bash
docker build -t panel-app-dynamic .
docker run -p 3000:3000 -e PORT=3000 panel-app-dynamic
# Aplikacja: http://localhost:3000
```

## Render (Docker)
1. W repozytorium musi być plik `Dockerfile` (jest w tym projekcie).
2. W Render utwórz **Web Service** i wybierz **Deploy from a Dockerfile**.
3. Wskaż to repo/branch.
4. Port: Render odczyta z `PORT` (domyślnie 3000). Nie ustawiaj Build/Start Command — Dockerfile to określa.

## API
- `GET /api/ping` – zwraca `{ status, startedAt, now }` jako dowód działania części dynamicznej.

## Notatki
- UI zawiera placeholder *dialogbox* i miejsce na nick. Logika wiadomości nie jest zaimplementowana.
- W przyszłości można dodać WebSocket/Socket.IO i endpointy do wiadomości.
