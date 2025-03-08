import { DataBase } from "../../config/database/config";

export class AuthService {

    private _db: DataBase;

    constructor() {
        this._db = DataBase.instance;
    }

    async signin(data: any) {
        try {
            return data;
        } catch (error) {
            throw error;
        }
    }

    async signup(data: any) {
        try {
            return data;
        } catch (error) {
            throw error;
        }
    }
}
