import { Router, Request, Response } from "express";

export class SystemModule {
    public router: Router;

    constructor() {
        this.router = Router();
        this.initializeRoutes();
    }

    private initializeRoutes() {
        this.router.get("/version", this.getVersion);
    }

    private getVersion(req: Request, res: Response) {
        res.json({
            status: "success",
            message: "System version",
            version: "1.0.0"
        });
    }
}
