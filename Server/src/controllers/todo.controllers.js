import { Todo } from "../models/todo.model";

const createTodo = async (req, res) => {
  try {
    const { title, content } = req.body;
    if (!title || !content) {
      return res.status(400).json({success: false, message: "Title and content is required", data: {}});
    }
    const setTodo = await Todo.create({
      title,
      content,
    });
    if (!setTodo) {
      return res.status(500).json({success: false, message: "Error creating todo", data: {}});
    }
    return res
      .status(201)
      .json({
        success: true,
        message: "Todo added successfully",
        data: setTodo,
      });
  } catch (error) {
    console.error("Error creating todo: ", error); // Logs the error for debugging
    return res.status(500).json({success: false, message: "Error creating todo", data: {}});
  }
};

const updateTodo = async(req, res) => {
    try {
        const {title, content} = req.body;
        const {todoId} = req.params;
        if (!title || !content) {
            return res.status(400).json({success: false, message: "Title and content is required", data: {}});
          }
          const updatedTodo = await Todo.findByIdAndUpdate(todoId, {
            $set: {
                title,
                content
            }
          }, {new: true});
          if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
                data: {}
            });
        }
          return res
          .status(200)
          .json({
            success: true,
            message: "Todo updated successfully",
            data: updatedTodo,
          });
    } catch (error) {
        console.error("Error updating todo: ", error); // Logs the error for debugging
        return res.status(500).json({success: false, message: "Error updating todo", data: {}});
    }
}

const deleteTodo = async(req, res) => {
    try {
        const {id} = req.params;
        if (!id) {
            return res.status(400).json({success: false, message: "Id is required", data: {}});
        }
        const deletedTodo = await Todo.findByIdAndDelete(id);
        if (!deletedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
                data: {}
            });
        }
          return res
          .status(200)
          .json({
            success: true,
            message: "Todo deleted successfully",
            data: {},
          });
    
    } catch (error) {
        console.error("Error deleting todo: ", error); // Logs the error for debugging
        return res.status(500).json({success: false, message: "Error deleting todo", data: {}});
    }
}

const getAllTodos = async(_, res) => {
   try {
     const getTodos = await Todo.find({});
     if (getTodos.length < 1) {
         return res.status(404).json({
             success: false,
             message: "There is any todos created yet!",
             data: {}
         });
     }
       return res
       .status(200)
       .json({
         success: true,
         message: "Todos fetched successfully",
         data: getTodos,
       });
   } catch (error) {
    console.error("Error on fetching todos: ", error); // Logs the error for debugging
        return res.status(500).json({success: false, message: "Error on fetching todos", data: {}});
   }
}

const toggleCompleted = async(req, res) => {
    try {
        const {id} = req.params;
        const complete = req.body
        if (!id) {
            return res.status(400).json({success: false, message: "Id is required", data: {}});
        }
        const toggle = await Todo.findByIdAndUpdate(id, {
            $set: {
                isCompleted: complete
            }
        }, {new: true});

        if (!toggle) {
            return res.status(404).json({
                success: false,
                message: "Todo not found",
                data: {}
            });
        }
          return res
          .status(200)
          .json({
            success: true,
            message: "Todo toggled successfully",
            data: toggle,
          });
    } catch (error) {
        console.error("Error on marking as completed: ", error); // Logs the error for debugging
        return res.status(500).json({success: false, message: "Error on marking as completed", data: {}});
    }
}

export {
    createTodo,
    updateTodo,
    toggleCompleted,
    deleteTodo,
    getAllTodos
}