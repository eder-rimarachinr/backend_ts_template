'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  // Obtener el ID del rol "super admin"
  const [roles] = await queryInterface.sequelize.query(
    `SELECT id FROM roles WHERE key_code = 'SA' LIMIT 1;`
  );

  // Obtener el ID del usuario "superadmin"
  const [users] = await queryInterface.sequelize.query(
    `SELECT id FROM users WHERE username = 'superadmin' LIMIT 1;`
  );

  if (roles.length > 0 && users.length > 0) {
    await queryInterface.bulkInsert('user_roles', [
      {
        user_id: users[0].id,
        role_id: roles[0].id,
        created_at: new Date(),
        updated_at: new Date(),
      }
    ]);
  }
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.bulkDelete('user_roles', null, {});
}
