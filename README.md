# Monitoring Dashboard with Prometheus & Grafana

A Node.js application instrumented for observability, with metrics collected by Prometheus and visualized in Grafana — all orchestrated with Docker Compose.

## Tech Stack
- Node.js + Express
- prom-client (metrics instrumentation)
- Docker & Docker Compose
- Prometheus (metrics collection)
- Grafana (visualization)

## Architecture

App (exposes /metrics) → Prometheus (scrapes every 5s) → Grafana (dashboard)

## How to Run

```bash
docker-compose up --build
```

- App: http://localhost:3000
- Prometheus: http://localhost:9090
- Grafana: http://localhost:3001 (login: admin/admin)

## Features
- Custom and default metrics (HTTP request count, CPU, memory) exposed via `/metrics`
- Prometheus configured to scrape the app automatically
- Grafana dashboard visualizing live request metrics