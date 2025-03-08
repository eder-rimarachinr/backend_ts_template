import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/apiResponse"; // Asegúrate de que ApiResponse está configurado correctamente
import { HttpStatusCode } from "../utils/httpStatusCodes"; // Asegúrate de que HttpStatusCode tiene los códigos de estado

import createHttpError, { HttpError } from "http-errors";
import { ValidationError } from "sequelize";

// Definir una interfaz para los errores esperados
interface CustomError extends HttpError {
    message: string;
    status: number;
    stack?: string;
}

export const errorHandler = (err: CustomError, req: Request, res: Response, next: NextFunction) => {
    let status: number = HttpStatusCode.INTERNAL_SERVER_ERROR; // Definir `status` como un número
    let message = "Internal Server Error";
    let errors: string[] = [];

    if (err instanceof ValidationError) {
        status = HttpStatusCode.BAD_REQUEST;
        message = "Invalid data provided";
        errors = err.errors.map((e) => e.message);
    } else if (err instanceof Error) {
        message = err.message;
        errors = [err.message];
    }


    const error = createHttpError(status, message);

    if (process.env.NODE_ENV === "development" && err.stack) {
        console.error(err.stack);
    }


    res.status(error.status || status).json(
        ApiResponse.error(message, errors)
    );

    next();
};
