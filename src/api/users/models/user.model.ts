import { DataTypes, Model, Sequelize, Optional } from "sequelize";
import { LoginStatusTypes } from "../types/loginStatus.type";
import { GenderTypes } from "../types/gender.type";
import { USER_DEFAULT_VALUES } from "../constants/defaultValues";

// Definimos los tipos de los atributos
export interface UserAttributes {
    id: number;
    name: string;
    paternal_lastname: string;
    maternal_lastname: string;
    document_type: string;
    document_number: string;
    date_of_birth: Date | null;
    username: string;
    email: string;
    password: string;
    salt: string;
    notifications: boolean;
    status: boolean;
    gender: GenderTypes;
    login_status: LoginStatusTypes;
    failed_attempts: number;
    last_lock_date?: Date | null;
    last_unlock_date?: Date | null;
    lockout_minutes?: number | null;
    device_id?: string;
    recovery_code?: string | null;


    created_at?: Date;
    updated_at?: Date | null;

    created_by?: number | null;
    updated_by?: number | null;
}

// Definir la interfaz de creación, donde ciertos campos son opcionales
export interface UserCreationAttributes
    extends Optional<UserAttributes, "id" | "date_of_birth" | "last_lock_date" | "last_unlock_date" | "lockout_minutes" | "status"> { }

// Definimos la clase `User` que extiende de `Model` de Sequelize
export class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
    id!: number;
    name!: string;
    paternal_lastname!: string;
    maternal_lastname!: string;
    document_type!: string;
    document_number!: string;
    date_of_birth!: Date | null;
    username!: string;
    email!: string;
    password!: string;
    salt!: string;
    notifications!: boolean;
    status!: boolean;
    gender!: GenderTypes;
    login_status!: LoginStatusTypes;
    failed_attempts!: number;
    last_lock_date?: Date | null;
    last_unlock_date?: Date | null;
    lockout_minutes?: number | null;
    device_id?: string;
    recovery_code?: string | null;
    created_date?: Date;
    updated_date?: Date | null;
    created_by?: number | null;
    updated_by?: number | null;

    // Aquí puedes agregar métodos de instancia si lo necesitas
}

// Función para crear la fábrica de la clase User (sin cambios en este caso)
export function UserFactory(sequelize: Sequelize): typeof User {
    return User.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            paternal_lastname: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            maternal_lastname: {
                type: DataTypes.TEXT,
                allowNull: false,
            },
            date_of_birth: {
                type: DataTypes.DATEONLY,
                allowNull: true,
            },
            username: {
                type: DataTypes.STRING,
                allowNull: false,
                unique: true,
            },
            email: {
                type: DataTypes.STRING(1000),
                allowNull: false,
                unique: true,
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            document_type: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            document_number: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            salt: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            notifications: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            gender: {
                type: DataTypes.ENUM("MALE", "FEMALE", "NON_BINARY"),
                allowNull: false,
                defaultValue: "NON_BINARY",
            },
            login_status: {
                type: DataTypes.STRING(10),
                allowNull: false,
                defaultValue: USER_DEFAULT_VALUES.LOGIN_STATUS,
            },
            failed_attempts: {
                type: DataTypes.INTEGER,
                allowNull: false,
                defaultValue: USER_DEFAULT_VALUES.FAILED_ATTEMPTS,
            },
            last_lock_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            last_unlock_date: {
                type: DataTypes.DATE,
                allowNull: true,
            },
            lockout_minutes: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            device_id: {
                type: DataTypes.STRING(1000),
                allowNull: true,
            },
            recovery_code: {
                type: DataTypes.STRING(50),
                allowNull: true,
            },
            created_by: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            updated_by: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },
        },
        {
            sequelize,
            tableName: "users",
            timestamps: false
        }
    );
}
