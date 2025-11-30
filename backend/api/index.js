import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import serverless from 'serverless-http';
import routes from '../routes/todo.routes.js';
import sequelize from '../config/db.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/todos', routes);

// Optional: health check
app.get('/health', (req, res) => {
  res.json({ status: 'Serverless API running' });
});

// Sync DB on cold start
let isDbInitialized = false;

const initDb = async () => {
  if (!isDbInitialized) {
    try {
      await sequelize.sync();
      console.log('Database synced');
      isDbInitialized = true;
    } catch (err) {
      console.error('DB sync failed:', err);
    }
  }
};

// Wrap handler
export const handler = serverless(async (req, res) => {
  await initDb();
  return app(req, res);
});
