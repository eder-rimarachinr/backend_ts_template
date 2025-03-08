import { NextFunction, Request, Response } from "express";
import { AuthService } from "./auth.service";
import { ApiResponse } from "../../utils/apiResponse";
import { HttpStatusCode } from "../../utils/httpStatusCodes";

export class AuthController {
    private authService = new AuthService();

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.authService.login(req.body);
            res.status(HttpStatusCode.OK).json(ApiResponse.success("Login exitoso", [result]));
        } catch (error) {
            next(error);
        }
    };


    register = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const result = await this.authService.register(req.body);
            res.status(HttpStatusCode.CREATED).json(ApiResponse.success("Registro exitoso", [result], HttpStatusCode.CREATED));
        } catch (error) {
            next(error); // Si ocurre un error, lo pasamos al middleware de manejo de errores
        }
    };

}
