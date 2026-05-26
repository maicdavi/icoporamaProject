# icoporamaProject

Proyecto universitario con frontend Angular 20, un backend reservado para la API y entorno Docker con Postgres y servidor web Nginx.

## Estructura

- `frontend`: aplicacion Angular 20 con un modulo Home que muestra `HolaMundo`.
- `backend`: carpeta reservada para el backend.
- `docker-compose.yml`: levanta Postgres y el servidor web del frontend.

## Comandos

```bash
cd frontend
npm start
```

```bash
docker compose up --build
```

El frontend en Docker queda disponible en `http://localhost:8080`.
Postgres queda disponible en `localhost:5432` con base de datos, usuario y password `icoporama`.
