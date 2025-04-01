import { Model } from "sequelize";
import { DataBase } from "../../config/database/config";  // Asegúrate de que la ruta sea correcta

export class UsersService {

    private _db: DataBase;

    constructor() {
        this._db = DataBase.instance;
    }

    public async getAll(): Promise<Model[]> {
        try {
            return await this._db.sequelize.models.User.findAll();
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            throw new Error("No se pudieron obtener los usuarios");
        }
    }

    public async create(data: Record<string, any>): Promise<{ message: string; data: Model }> {
        try {
            const user = await this._db.sequelize.models.User.create(data);
            return { message: "Usuario creado", data: user };
        } catch (error) {
            console.error("Error al crear usuario:", error);
            throw new Error("No se pudo crear el usuario");
        }
    }
}
