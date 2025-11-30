import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

/*
  Todo Model Definition
  This model represents a single task in the todo list.
  Sequelize automatically creates the table (if not existing)
  based on this structure when sequelize.sync() runs.
*/

const Todo = sequelize.define("Todo", {
    // Primary key – unique ID for each todo item
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },

    // Title/description of the todo task
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },

    // Tracks whether the task is completed or still pending
    isCompleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

export default Todo;
