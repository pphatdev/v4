# Getting Started

This project is a modern web application built with **React** and **TypeScript**, managed through npm. Follow the steps below to set up your development environment and start building.

## Prerequisites

Before you begin, ensure you have the following installed on your system:
- **Node.js** (version 16 or higher)
- **npm** (comes with Node.js)
- **Git** for version control

## Clone Project

Choose your preferred method to clone the repository:

```shell
# SSH (recommended if you have SSH keys set up)
git clone git@github.com:pphatdev/v4.git && cd ./v4

# HTTPS (works without SSH setup)
git clone https://github.com/pphatdev/v4.git && cd ./v4
```

## ⚒️ Start Cooking

Install dependencies and launch the development server:

```shell
cp .env.example .env && npm install && npm run dev
```

This will:
- Install all required packages and dependencies
- Start the development server with hot-reload
- Open your application in the browser (typically at `http://localhost:3000`)

## ⌛ Build for Production

When you're ready to deploy:

```shell
npm run build && npm start
```

This command will:
- Create an optimized production build
- Start the production server

## 🐳 Docker Deployment

This project includes Docker configuration for containerized deployment with nginx as a reverse proxy.

### Prerequisites for Docker

- **Docker** (version 20.10 or higher)
- **Docker Compose** (version 2.0 or higher)

### Quick Start with Docker

1. Copy the environment file:
```shell
cp .env.example .env
```

2. Build and start the containers:
```shell
docker compose up -d --build
```

3. Access the application at `http://v4.stackdev.cloud` (ensure DNS is configured)

### Docker Commands

```shell
# Build and start containers
docker compose up -d --build

# View logs
docker compose logs -f

# Stop containers
docker compose down

# Rebuild and restart
docker compose up -d --build --force-recreate
```

### Configuration

- **Dockerfile**: Multi-stage build for optimized Next.js production image
- **docker-compose.yml**: Orchestrates the Next.js app and nginx services
- **nginx/conf.d/v4.stackdev.cloud.conf**: nginx configuration with `server_name v4.stackdev.cloud`

### SSL Configuration

To enable HTTPS:
1. Add your SSL certificates to `nginx/ssl/v4.stackdev.cloud/`
2. Uncomment the SSL configuration in `nginx/conf.d/v4.stackdev.cloud.conf`
3. Restart the nginx container

---

**💡 Quick Tip:** The development server includes TypeScript type checking and React Fast Refresh for an improved developer experience.
