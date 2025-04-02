import { Router, Request, Response } from "express";
import config from './../../config/environments'

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
            name: config.APP_NAME,
            version: config.APP_VERSION
        });
    }
}
