import { Router } from "express";
import { AuthController } from "./auth.controller";
import { signInValidator } from "./validators/auth.validator";
import { allValidator } from "../../middlewares/errorValidator";

export class AuthModule {
    public router: Router = Router();
    private controller = new AuthController();

    constructor() {
        this.initializeRoutes();
    }

    private initializeRoutes() {

        this.router.post("/signin",
            signInValidator,
            allValidator,
            this.controller.signin);

        this.router.post("/signup", this.controller.signup);
    }
}
