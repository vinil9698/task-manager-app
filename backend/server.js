// Load environment variables (PORT, DB credentials, etc.)
require('dotenv').config();

const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todo.routes');
const sequelize = require('./config/db')

const app = express();

// Enable CORS for cross-origin requests (frontend ↔ backend)
app.use(cors());

// Parse incoming JSON request bodies
app.use(express.json());

// Register all Todo API routes under /api/todos
app.use('/api/todos', todoRoutes);

// Sync Sequelize models with the database, then start server
sequelize.sync()
    .then(() => {
        app.listen(process.env.PORT, (err) => {
            if (err) {
                console.log(`Server connection error: ${err}`);
                return;
            }
            console.log(`Server connected successfully and running on port ${process.env.PORT}`);
        });
    })
    .catch((err) => console.log(`Sequelize sync failed: ${err}`));
