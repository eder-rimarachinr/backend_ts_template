import express from "express";
import { UsersController } from "./users.controller";

export class UsersModule {
    public router = express.Router();
    private controller = new UsersController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/getall", this.controller.login);
        this.router.post("/create", this.controller.register);
    }
}