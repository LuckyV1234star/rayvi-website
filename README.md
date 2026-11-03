# Rayvi

English marketing site for Rayvi: a personal companion for calendar and expenses, with a persona you set. The page is a Next.js App Router app rendered by Node. It is not a static export.

The four feature blocks are interactive previews with sample data. They do not call the Rayvi API.

## Local

```powershell
npm install
npm run dev
```

Open http://localhost:3000.

Production mode on this machine:

```powershell
npm run build
npm run start
```

`npm run start` listens on port 3000. The Docker image listens on 8088.

## Docker

Build and run the Node server, published only on loopback:

```powershell
docker compose up --build -d
```

The site is at http://127.0.0.1:8088.

Stop it with `docker compose down`.

## Oracle and Cloudflare Tunnel

This image replaces the static nginx `rayvi-site`. On the Oracle VM, run the container so it binds `127.0.0.1:8088` on the host (as in `docker-compose.yml`). Do not publish that port on a public interface.

Point the Cloudflare Tunnel ingress for `rayvi.net` and `www.rayvi.net` at `http://127.0.0.1:8088`.
