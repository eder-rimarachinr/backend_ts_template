import { DataTypes, Model, Sequelize, Optional } from "sequelize";

export interface TokenAttributes {
    id: number;
    user_id: number;
    created_at: Date;
    expires_at: Date;
    last_request_at: Date;
    uuid: string;
    status: boolean;
}

export interface TokenCreationAttributes
    extends Optional<TokenAttributes, "id"> { }

export class Token extends Model<TokenAttributes, TokenCreationAttributes> implements TokenAttributes {
    id!: number;
    user_id!: number;
    created_at!: Date;
    expires_at!: Date;
    last_request_at!: Date;
    uuid!: string;
    status!: boolean;
}

export function TokenFactory(sequelize: Sequelize): typeof Token {
    return Token.init(
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
            },
            uuid: {
                type: DataTypes.STRING(100),
                allowNull: false,
            },
            created_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW'),
            },
            expires_at: {
                type: DataTypes.DATE,
                defaultValue: Sequelize.literal(`( NOW() + INTERVAL 4 HOUR) `),
                allowNull: false,
            },
            last_request_at: {
                type: DataTypes.DATE,
                allowNull: false,
                defaultValue: Sequelize.fn('NOW'),
            },
            status: {
                type: DataTypes.BOOLEAN,
                defaultValue: true,
            },
        },
        {
            sequelize,
            tableName: "token",
            timestamps: false,
        }
    );
}
