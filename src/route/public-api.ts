import { UserController } from "../controller/user_controller";
import express from "express";

export const publicRouter = express.Router();
publicRouter.post("/api/users", UserController.register);
publicRouter.post("/api/users/login", UserController.login);