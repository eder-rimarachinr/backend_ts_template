import { Request, Response } from "express";
import { UsersService } from "./users.service";

export class UsersController {
    private usersService = new UsersService();

    login = async (req: Request, res: Response) => {
        const result = await this.usersService.getAll();
        res.json(result);
    };

    register = async (req: Request, res: Response) => {
        const result = await this.usersService.create(req.body);
        res.json(result);
    };
}
