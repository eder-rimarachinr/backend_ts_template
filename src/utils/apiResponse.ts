import { HttpStatusCode, HttpStatusCodeType } from "./httpStatusCodes";

export interface IApiResponse {
    status: boolean;
    code: HttpStatusCodeType;
    message: string;
    result?: any[];  // Lista de elementos (opcional)
    error?: any[];      // Errores (opcional)
}

export class ApiResponse implements IApiResponse {
    status: boolean;
    code: HttpStatusCodeType;
    message: string;
    result?: any[];
    error?: any[];      // Errores (opcional)

    constructor(status: boolean, code: HttpStatusCodeType, message: string, result?: any[], error?: any[]) {
        this.status = status;
        this.code = code;
        this.message = message;
        this.result = result;
        this.error = error;
    }

    // Método estático success
    static success(message: string, result: any[] = [], code: HttpStatusCodeType = HttpStatusCode.OK): IApiResponse {
        // Directamente devolver el objeto con las propiedades
        return {
            status: true,
            code: code,
            message: message,
            result: result
        };
    }

    // Método estático error
    static error(message: string, error: any[] = [], code: HttpStatusCodeType = HttpStatusCode.BAD_REQUEST): IApiResponse {
        // Directamente devolver el objeto con las propiedades
        return {
            status: false,
            code: code,
            message: message,
            error: error
        };
    }
}
