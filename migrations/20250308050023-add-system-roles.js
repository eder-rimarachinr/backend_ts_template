'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {
        name: 'super admin',
        description: 'Super administrador del sistema',
        status: true,
        is_system: true,
        key_code: 'SA',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'admin',
        description: 'Administrador del sistema',
        status: true,
        is_system: true,
        key_code: 'AD',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'user',
        description: 'Usuario regular',
        status: true,
        is_system: true,
        key_code: 'US',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', { is_system: true });
  }
};
