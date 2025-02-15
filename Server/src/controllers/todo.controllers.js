import { Todo } from "../models/todo.model.js";

// Create a Todo
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      return res.status(400).json({ success: false, message: "Title and content are required", data: {} });
    }

    const setTodo = await Todo.create({ title, description });

    return res.status(201).json({
      success: true,
      message: "Todo added successfully",
      data: setTodo,
    });
  } catch (error) {
    console.error("Error creating todo: ", error);
    return res.status(500).json({ success: false, message: "Error creating todo", data: {} });
  }
};

// Update a Todo
const updateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const { id } = req.params; 
    
    if (!title || !description) {
      return res.status(400).json({ success: false, message: "Title and content are required", data: {} });
    }

    const updatedTodo = await Todo.findByIdAndUpdate(id, { $set: { title, description } }, { new: true });

    if (!updatedTodo) {
      return res.status(404).json({ success: false, message: "Todo not found", data: {} });
    }

    return res.status(200).json({
      success: true,
      message: "Todo updated successfully",
      data: updatedTodo,
    });
  } catch (error) {
    console.error("Error updating todo: ", error);
    return res.status(500).json({ success: false, message: "Error updating todo", data: {} });
  }
};

// Delete a Todo
const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTodo = await Todo.findByIdAndDelete(id);

    if (!deletedTodo) {
      return res.status(404).json({ success: false, message: "Todo not found", data: {} });
    }

    return res.status(200).json({
      success: true,
      message: "Todo deleted successfully",
      data: {},
    });
  } catch (error) {
    console.error("Error deleting todo: ", error);
    return res.status(500).json({ success: false, message: "Error deleting todo", data: {} });
  }
};

// Get all Todos
const getAllTodos = async (_, res) => {
  try {
    const getTodos = await Todo.find({}).sort({createdAt: -1});
    return res.status(200).json({
      success: true,
      message: "Todos fetched successfully",
      data: getTodos,
    });
  } catch (error) {
    console.error("Error fetching todos: ", error);
    return res.status(500).json({ success: false, message: "Error fetching todos", data: {} });
  }
};

// Toggle Completed Status
const toggleCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const { isCompleted } = req.body; 

    if (typeof isCompleted !== "boolean") {
      return res.status(400).json({ success: false, message: "Invalid completion status", data: {} });
    }

    const toggle = await Todo.findByIdAndUpdate(id, { $set: { isCompleted } }, { new: true });

    if (!toggle) {
      return res.status(404).json({ success: false, message: "Todo not found", data: {} });
    }

    return res.status(200).json({
      success: true,
      message: "Todo toggled successfully",
      data: toggle,
    });
  } catch (error) {
    console.error("Error marking as completed: ", error);
    return res.status(500).json({ success: false, message: "Error marking as completed", data: {} });
  }
};

export { createTodo, updateTodo, toggleCompleted, deleteTodo, getAllTodos };
