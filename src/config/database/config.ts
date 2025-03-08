import { config } from 'dotenv';
import { Sequelize } from 'sequelize';
import { User, UserFactory } from '../../api/users/models/user.model';
import { Role, RoleFactory } from '../../api/role/model/role.model';
import { Token, TokenFactory } from '../../api/token/model/token.model';
import { UserRole, UserRoleFactory } from '../../api/user-role/model/user-role.model';

config();


// Clase Database que implementa el patrón Singleton
export class DataBase {
    private static _instance: DataBase;
    public sequelize: Sequelize;

    public user: typeof User;
    public role: typeof Role;
    public user_role: typeof UserRole;
    public token: typeof Token;

    private constructor() {
        this.sequelize = new Sequelize(
            process.env.PROY_BD_NAME! as string,
            process.env.PROY_BD_USER! as string,
            process.env.PROY_BD_PASS! as string,
            {
                host: process.env.PROY_BD_HOST!,
                port: +process.env.PROY_BD_PORT!,
                dialect: 'mysql',
                logging: process.env.NODE_ENV === 'development' ? console.log : false,
                pool: {
                    max: 5,
                    min: 0,
                    acquire: 30000,
                    idle: 10000
                },
            }
        );

        this.user = UserFactory(this.sequelize);
        this.role = RoleFactory(this.sequelize);
        this.token = TokenFactory(this.sequelize);
        this.user_role = UserRoleFactory(this.sequelize);

        // Aseguramos que los modelos están cargados
        this.sequelize.models.User = this.user;
        this.sequelize.models.Role = this.role;
        this.sequelize.models.Token = this.token;
        this.sequelize.models.UserRole = this.user_role;

        this.connectDb();
    }

    public static get instance(): DataBase {
        if (!this._instance) {
            this._instance = new this();
        }
        return this._instance;
    }


    private connectDb(): void {
        this.sequelize
            .authenticate()
            .then(() => {
                console.log("🤖 ¡Run database!");
            })
            .catch((err: any) => console.log(err));
    }

}

