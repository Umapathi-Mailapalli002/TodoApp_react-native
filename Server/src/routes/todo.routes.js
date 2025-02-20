import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getAllTodos,
  toggleCompleted,
  updateTodo,
} from "../controllers/todo.controllers.js";

const router = Router();

router.route("/").get(getAllTodos).post(createTodo);
router
  .route("/:id")
  .delete(deleteTodo)
  .patch(updateTodo)
router.route("/toggle/:id").patch(toggleCompleted)
export default router;
