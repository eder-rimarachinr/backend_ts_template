import { validationResult } from "express-validator";
import { Request, Response, NextFunction } from "express";
import { ApiResponse } from "../utils/apiResponse";
import { HttpStatusCode } from "../utils/httpStatusCodes";

export const allValidator = (
    req: Request,
    res: Response,
    next: NextFunction
): void => {  // Nota que especificamos `void` aquí
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(HttpStatusCode.BAD_REQUEST).json(
            ApiResponse.error(
                "Validación fallida",
                errors.array(),
                HttpStatusCode.BAD_REQUEST
            )
        );
        return;
    }

    next(); // Esto no debe devolver un valor
};
