import { DataTypes, Model, Sequelize, Optional } from "sequelize";

export interface RoleAttributes {
    id: number;
    name: string;
    description?: string;
    status: boolean;

    is_system?: Boolean;
    key_code?: string;
    created_at?: Date;
    updated_at?: Date;
    created_by?: number;
    updated_by?: number;
}

export interface RoleCreationAttributes
    extends Optional<RoleAttributes, "id"> { }

export class Role extends Model<RoleAttributes, RoleCreationAttributes> implements RoleAttributes {
    id!: number;
    name!: string;
    description?: string;
    status!: boolean;

    is_system?: Boolean;
    key_code?: string;
    created_at?: Date;
    updated_at?: Date;
    created_by?: number;
    updated_by?: number;
}

export function RoleFactory(sequelize: Sequelize): typeof Role {
    return Role.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            name: {
                type: DataTypes.STRING(255),
                allowNull: false,
            },
            description: {
                type: DataTypes.TEXT,
                allowNull: true,
            },
            status: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: true,
            },
            key_code: {
                type: DataTypes.STRING(10),
                allowNull: true,
            },
            created_by: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            is_system: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
                defaultValue: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: DataTypes.NOW,
            },
            updated_by: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            updated_at: {
                type: DataTypes.DATE,
                allowNull: true,
            },

        },
        {
            sequelize,
            tableName: "role",
            timestamps: false,
        }
    );
}