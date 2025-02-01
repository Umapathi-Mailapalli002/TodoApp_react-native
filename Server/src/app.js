import express from "express"
import cors from "cors"
const app = express();

app.use(cors({
    origin: process.env.CROSS_ORIGIN,
    credential: true
}))

app.use(express.json({limit: "16kb"}))
app.use(express.urlencoded({extended: true, limit: "16kb"}))
import todoRoute from "./routes/todo.routes.js"
app.use('/todos/api/v1/', todoRoute);
export {app};