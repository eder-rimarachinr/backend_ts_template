'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('users', {
    id: {
      type: Sequelize.BIGINT,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    paternal_lastname: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    maternal_lastname: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    date_of_birth: {
      type: Sequelize.DATEONLY,
      allowNull: true,
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: Sequelize.STRING(1000),
      allowNull: false,
      unique: true,
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    document_type: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    document_number: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    salt: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    notifications: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    status: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    gender: {
      type: Sequelize.ENUM('MALE', 'FEMALE', 'NON_BINARY'),
      allowNull: false,
      defaultValue: 'NON_BINARY',
    },
    login_status: {
      type: Sequelize.STRING(10),
      allowNull: false,
      defaultValue: 'H', // Ajusta según USER_DEFAULT_VALUES.LOGIN_STATUS
    },
    failed_attempts: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0, // Ajusta según USER_DEFAULT_VALUES.FAILED_ATTEMPTS
    },
    last_lock_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    last_unlock_date: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    lockout_minutes: {
      type: Sequelize.INTEGER,
      allowNull: true,
    },
    device_id: {
      type: Sequelize.STRING(1000),
      allowNull: true,
    },
    recovery_code: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP'),
    },
  });

  // 🔹 Paso 2: Ahora que la tabla ya existe, agregamos las claves foráneas.
  await queryInterface.addColumn('users', 'created_by', {
    type: Sequelize.BIGINT,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'SET NULL',
  });

  await queryInterface.addColumn('users', 'updated_by', {
    type: Sequelize.BIGINT,
    allowNull: true,
    references: {
      model: 'users',
      key: 'id',
    },
    onDelete: 'SET NULL',
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('users');
}
