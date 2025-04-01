import { DataTypes, Model, Sequelize, Optional } from "sequelize";

export interface UserRoleAttributes {
    id: number;
    user_id: number;
    role_id: number;
    assigned_by: number;
    is_system: boolean;

    created_at?: Date;
    updated_at?: Date;
}

export interface UserRoleCreationAttributes
    extends Optional<UserRoleAttributes, "id"> { }

export class UserRole extends Model<UserRoleAttributes, UserRoleCreationAttributes> implements UserRoleAttributes {
    id!: number;
    user_id!: number;
    role_id!: number;
    assigned_by!: number;
    is_system!: boolean;

    created_at?: Date;
    updated_at?: Date;
}

// Función para inicializar el modelo UserRole
export function UserRoleFactory(sequelize: Sequelize): typeof UserRole {
    return UserRole.init(
        {
            id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            user_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            role_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'roles',
                    key: 'id',
                },
                onDelete: 'CASCADE',
            },
            assigned_by: {
                type: DataTypes.BIGINT,
                allowNull: false,
                references: {
                    model: 'users',
                    key: 'id',
                },
            },
            is_system: {
                type: DataTypes.BOOLEAN,
                allowNull: false,
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
            tableName: 'user_roles',
            timestamps: false,
        }
    );
}