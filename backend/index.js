import express from "express";
import cors from "cors";
import UserRouter from "./Routes/UserRouter.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(UserRouter);

app.listen(5000, ()=> console.log('server up and running'));