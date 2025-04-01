import { NextFunction, Request, Response } from "express";
import { UsersService } from "./users.service";
import { HttpStatusCode } from "../../utils/httpStatusCodes";
import { ApiResponse } from "../../utils/apiResponse";

export class UsersController {
    private usersService: UsersService;

    constructor() {
        this.usersService = new UsersService();

        // Enlazamos los métodos al contexto de la clase
        this.getAllUsers = this.getAllUsers.bind(this);
        this.register = this.register.bind(this);
    }

    public async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.usersService.getAll();
            res
                .status(HttpStatusCode.OK)
                .json(ApiResponse.success("Datos de Usuario", result, []));
        } catch (error) {
            next(error);
        }
    }

    public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.usersService.create(req.body);

            res.status(HttpStatusCode.CREATED)
                .json(ApiResponse.success("Usuario Creado", [], result));
        } catch (error) {
            next(error);
        }
    }
}
