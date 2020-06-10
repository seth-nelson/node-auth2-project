// Modules
const express = require('express');
const cors = require('cors');

// Routers
const authRouter = require('../auth/auth-router.js');
const usersRouter = require('../users/users-router.js');

// Middleware
const restricted = require('../auth/restricted-middleware.js');

const server = express();

server.use(express.json());
server.use(cors());

server.use("/api/auth", restricted, authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
    res.json({ Message: 'API is up and running.' });
});

module.exports = server;