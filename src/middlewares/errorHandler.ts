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

    // Manejar errores de validación de Sequelize
    if (err instanceof ValidationError) {
        status = HttpStatusCode.BAD_REQUEST;
        message = "Invalid data provided";
    } else if (err instanceof Error) {
        // Si es un error estándar de JavaScript, capturamos el mensaje
        message = err.message;
    }

    // Crear el error con el código de estado adecuado
    const error = createHttpError(status, message);

    // Si el error tiene un stack, lo incluimos para debug (en desarrollo)
    if (process.env.NODE_ENV === "development" && err.stack) {
        console.error(err.stack);
    }

    // Responder con el error en formato JSON usando ApiResponse
    res.status(error.status || status).json(
        ApiResponse.error(message, [err.message]) // Usamos ApiResponse para formatear la respuesta de error
    );

    // Pasar el error al siguiente middleware si es necesario (aunque no es obligatorio aquí)
    next();
};
