# Running the backend server + connecting it to the React client

## 1. Backend Server (Express + MongoDB)

```bash
cd server
npm install
cp .env.example .env      # then edit MONGO_URI if needed
npm run dev                # nodemon, or `npm start` for plain node
```

The server starts on `http://localhost:5000` (change with `PORT` in `.env`).

`MONGO_URI` in `server/.env` can point to a local MongoDB instance
(`mongodb://127.0.0.1:27017/socially`) or a MongoDB Atlas cluster
(`mongodb+srv://...`). `CLIENT_URL` should match the URL the frontend runs on
so CORS allows the requests (defaults to `http://localhost:5173`, Vite's
default port).

### Endpoints

| Method | Route          | Description                          |
|--------|----------------|---------------------------------------|
| GET    | /users         | List all users (passwords excluded)   |
| GET    | /users/:id     | Get a single user                     |
| POST   | /users         | Create a user (name, email, password) |
| PUT    | /users/:id     | Update a user's name/email/password   |
| DELETE | /users/:id     | Delete a user                         |
| POST   | /users/login   | Verify email + password (login)       |

All responses are JSON in the shape `{ success, data | message }`. Passwords
are hashed with bcrypt before being stored and are never returned in
responses.

## 2. Frontend Client (React + Vite)

```bash
cd client
npm install
cp .env.example .env       # VITE_API_URL=http://localhost:5000
npm run dev
```

The frontend reads the backend's URL from `VITE_API_URL` (see
`client/src/services/userService.js`). The Signup page calls `POST /users` and the
Login page calls `POST /users/login`; both now show a real error message on
failure instead of always succeeding.

## 3. Run both together

Open two terminals or run from the project root:

```bash
# Terminal 1 (or run: npm run server)
cd server && npm run dev

# Terminal 2 (or run: npm run client)
cd client && npm run dev
```

Visit the Vite dev URL (usually `http://localhost:5173`), sign up a new
account, then log in with the same email/password — the request now goes to
MongoDB via the Express API instead of just faking a redirect.

---

## 4. Deploying on Render

### Option A: Using the Render Blueprint (`render.yaml`)
1. In Render, select **New +** -> **Blueprint**.
2. Connect your GitHub repository (`socialmedia`).
3. Render will automatically read `render.yaml` and configure both:
   - **Backend Web Service** (`server`)
   - **Frontend Static Site** (`client`)

### Option B: Deploying Backend as a Web Service Manually
- **Root Directory**: `server`
- **Build Command**: `npm install`
- **Start Command**: `npm start`
- **Environment Variables**:
  - `MONGO_URI`: Your MongoDB Atlas URI
  - `CLIENT_URL`: Your frontend URL
  - `PORT`: `5000`

### Option C: Deploying Frontend as a Static Site Manually
- **Root Directory**: `client`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `dist`
- **Environment Variables**:
  - `VITE_API_URL`: Your deployed backend URL


