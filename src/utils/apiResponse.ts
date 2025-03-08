import { HttpStatusCode, HttpStatusCodeType } from "./httpStatusCodes";

export interface IApiResponse {
    status: boolean;
    code: HttpStatusCodeType;
    message: string;
    data: any[];
    error: any[];
}

export class ApiResponse implements IApiResponse {
    status: boolean;
    code: HttpStatusCodeType;
    message: string;
    data: any[];
    error: any[];

    constructor(status: boolean, code: HttpStatusCodeType, message: string, data: any[] = [], error: any[] = []) {
        this.status = status;
        this.code = code;
        this.message = message;
        this.data = data;
        this.error = error;
    }

    static success(message: string, data: any[] = [], code: HttpStatusCodeType = HttpStatusCode.OK): ApiResponse {
        return new ApiResponse(true, code, message, data);
    }

    static error(message: string, error: any[] = [], code: HttpStatusCodeType = HttpStatusCode.BAD_REQUEST): ApiResponse {
        return new ApiResponse(false, code, message, [], error);
    }
}
