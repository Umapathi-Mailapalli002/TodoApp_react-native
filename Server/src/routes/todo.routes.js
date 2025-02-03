import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  toggleCompleted,
  updateTodo,
} from "../controllers/todo.controllers";

const router = Router();

router.route("/").get(getAllTodos).post(createTodo);
router
  .route("/:id")
  .delete(deleteTodo)
  .patch(updateTodo)
  .patch(toggleCompleted);

export default router;
