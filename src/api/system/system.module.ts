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
            message: "System version",
            name: process.env.APP_NAME,
            version: process.env.APP_VERSION
        });
    }
}
