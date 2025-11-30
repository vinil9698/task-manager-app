
import { Router } from 'express';
import todoController from "../controllers/todo.controller.js";

const routes = Router();

routes.get('/', todoController.getTodos);
routes.post('/',todoController.createTodo);
routes.put('/:id', todoController.updateTodo);
routes.delete('/:id', todoController.deleteTodo);

export default routes;