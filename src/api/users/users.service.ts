import { DataBase } from "../../config/database/config";  // Asegúrate de que la ruta sea correcta

export class UsersService {

    private _db: DataBase;

    constructor() {
        this._db = DataBase.instance;
    }

    async getAll() {
        try {
            const users = await this._db.sequelize.models.User.findAll();

            return users;
        } catch (error) {
            console.error("Error al obtener usuarios:", error);
            throw error;
        }
    }

    async create(data: any) {
        try {
            // const user = await this._db.user.create(data);

            return { message: "Usuario creado", data };
        } catch (error) {
            console.error("Error al crear usuario:", error);
            throw error;
        }
    }
}
