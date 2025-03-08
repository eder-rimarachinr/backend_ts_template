'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const hashedPassword = await bcrypt.hash('yoshimi1#', 10);

    await queryInterface.bulkInsert('users', [
      {
        username: 'superadmin',
        email: 'superadmin@example.com',
        password: hashedPassword,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', { email: 'superadmin@example.com' });
  },
};
