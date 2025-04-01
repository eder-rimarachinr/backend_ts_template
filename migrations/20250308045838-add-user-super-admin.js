'use strict';

import { hash } from 'bcrypt';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  const hashedPassword = await hash('123456', 10);

  await queryInterface.bulkInsert('users', [
    {
      username: 'superadmin',
      email: 'superadmin@example.com',
      password: hashedPassword,
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('users', { email: 'superadmin@example.com' });
}
