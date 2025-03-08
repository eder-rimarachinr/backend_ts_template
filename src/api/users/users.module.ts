import express from "express";
import { UsersController } from "./users.controller";

export class UsersModule {
    public router = express.Router();
    private controller = new UsersController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/getall", this.controller.getAllUsers);
        this.router.post("/create", this.controller.register);
    }
}