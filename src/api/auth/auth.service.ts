import { DataBase } from "../../config/database/config";

export class AuthService {

    private _db: DataBase;

    constructor() {
        this._db = DataBase.instance;
    }

    async login(data: any) {
        try {
            return data;
        } catch (error) {
            throw error;
        }
    }

    async register(data: any) {
        try {
            return data;
        } catch (error) {
            throw error;
        }
    }
}
