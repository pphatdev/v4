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
npm install && npm run dev
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

---

**💡 Quick Tip:** The development server includes TypeScript type checking and React Fast Refresh for an improved developer experience.
