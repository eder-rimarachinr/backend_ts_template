import { DataBase } from "../../config/database/db.config";

export class AuthService {

    private _db: DataBase;

    constructor() {
        this._db = DataBase.instance;
    }

    public async signin(data: []): Promise<[]> {
        try {
            return data;
        } catch (error) {
            throw error;
        }
    }

    public async signup(data: []): Promise<[]> {
        try {
            return data;
        } catch (error) {
            throw error;
        }
    }
}
