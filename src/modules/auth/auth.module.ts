import express from "express";
import { AuthController } from "./auth.controller";

export class AuthModule {
    public router = express.Router();
    private controller = new AuthController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.post("/login", this.controller.login);
        this.router.post("/register", this.controller.register);
    }
}
