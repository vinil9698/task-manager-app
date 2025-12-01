
import todoController from "../controllers/todo.controller.js";
import { Router } from 'express';

const todoRoutes = Router();

todoRoutes.get('/', todoController.getTodos);
todoRoutes.post('/',todoController.createTodo);
todoRoutes.put('/:id', todoController.updateTodo);
todoRoutes.delete('/:id', todoController.deleteTodo);

export default todoRoutes;