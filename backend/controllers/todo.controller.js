const Todo = require('../models/todo.model.js')

/*
  Get all todos
  Fetches every record from the Todo table and returns them as a JSON response.
*/
const getTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

/*
  Create a new todo
  Takes request body data and inserts a new todo record into the database.
*/
const createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    // Check if a todo with the same title already exists
    const existingTodo = await Todo.findOne({ where: { title } });

    if (existingTodo) {
      return res.status(400).json({
        error: `Todo with title ${title} already exists`,
      });
    }

    // Create new todo if not exists
    await Todo.create(req.body);
    res.status(201).json({
      success: "Todo created successfully"
    });

  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

/*
  Update an existing todo
  Finds a todo by its ID and updates its values based on the request body.
*/
const updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    // Update the todo item
    const [updatedRows] = await Todo.update(req.body, { where: { id } });

    if (updatedRows === 0) {
      return res.status(404).json({ error: `Todo with id ${id} not found` });
    }

    res.json({ success: 'Todo updated successfully' });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

/*
  Delete a todo
  Removes a todo record from the database based on the ID provided in the URL params.
*/
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRows = await Todo.destroy({ where: { id } });

    if (deletedRows === 0) {
      return res.status(404).json({ error: `Todo with id ${id} not found` });
    }

    res.json({ success: 'Todo deleted successfully' });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

/*
  Export all controller methods
*/
module.exports = {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
};
