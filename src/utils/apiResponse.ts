import { HttpStatusCode, HttpStatusCodeType } from "./httpStatusCodes";

export interface IApiResponse {
    status: boolean;
    code: HttpStatusCodeType;
    message: string;
    data_list?: any[];  // Lista de elementos (opcional)
    data_row?: any;     // Un único objeto (opcional)
    error?: any[];      // Errores (opcional)
}

export class ApiResponse implements IApiResponse {
    status: boolean;
    code: HttpStatusCodeType;
    message: string;
    data_list?: any[];  // Lista de elementos (opcional)
    data_row?: any;     // Un único objeto (opcional)
    error?: any[];      // Errores (opcional)

    constructor(status: boolean, code: HttpStatusCodeType, message: string, data_list?: any[], data_row?: any, error?: any[]) {
        this.status = status;
        this.code = code;
        this.message = message;
        this.data_list = data_list;
        this.data_row = data_row;
        this.error = error;
    }

    // Método estático success
    static success(message: string, data_list: any[] = [], data_row: any = null, code: HttpStatusCodeType = HttpStatusCode.OK): IApiResponse {
        // Directamente devolver el objeto con las propiedades
        return {
            status: true,
            code: code,
            message: message,
            data_list: data_list.length > 0 ? data_list : undefined,
            data_row: data_row ? data_row : undefined
        };
    }

    // Método estático error
    static error(message: string, error: any[] = [], code: HttpStatusCodeType = HttpStatusCode.BAD_REQUEST): IApiResponse {
        // Directamente devolver el objeto con las propiedades
        return {
            status: false,
            code: code,
            message: message,
            data_list: [],
            data_row: null,
            error: error
        };
    }
}
