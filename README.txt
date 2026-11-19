Evertale Daily Bot — Backend Starter v0.1

IMPORTANT: This is only a basic server health-check starter. It does NOT log in
to Evertale, does NOT accept restore codes, and does NOT run game tasks.

Files:
- server.js: Node.js HTTP server with /health endpoint
- package.json: start command for Render

Render setup after uploading these files to your GitHub repository:
- Create a new Web Service and connect the repository.
- Build command: npm install
- Start command: npm start
- Choose a free instance if available.

After deployment, visit your Render URL ending in /health. A JSON response
with status "backend-starter" means only that the server is running.

Do not add restore codes, passwords, or game tokens to this starter.
