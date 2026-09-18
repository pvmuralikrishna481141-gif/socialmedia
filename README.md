# Socially - Fullstack Social Media Application

A modern social media application structured into a React frontend client and an Express/MongoDB backend server.

## Project Structure

```
socialmedia-main/
├── client/                 # Frontend React application (Vite + Tailwind CSS)
│   ├── src/                # React components, pages, services, assets
│   ├── public/             # Static assets
│   ├── .env.example        # Environment variables template for client
│   ├── package.json        # Client dependencies & scripts
│   └── vite.config.js      # Vite configuration
│
├── server/                 # Backend REST API (Node.js + Express + Mongoose)
│   ├── config/             # DB configuration
│   ├── controllers/        # Request handlers
│   ├── models/             # Mongoose schemas
│   ├── routes/             # API routes
│   ├── .env.example        # Environment variables template for server
│   ├── package.json        # Server dependencies & scripts
│   └── server.js           # Server entry point
│
├── package.json            # Root scripts for running client & server
├── SETUP.md                # Detailed setup & run instructions
└── README.md
```

## Quick Start

### 1. Install Dependencies
```bash
npm run install:all
```
*(Or run `npm install` inside both `client` and `server` folders)*

### 2. Configure Environment
- Copy `server/.env.example` to `server/.env` and configure your `MONGO_URI`.
- Copy `client/.env.example` to `client/.env` (configured for `http://localhost:5000` by default).

### 3. Run Applications

In two separate terminals:

```bash
# Terminal 1: Run server (http://localhost:5000)
npm run server

# Terminal 2: Run client (http://localhost:5173)
npm run client
```

For more detailed API and setup documentation, see [SETUP.md](SETUP.md).
