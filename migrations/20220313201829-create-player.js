'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Players', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      PlayerId: {
        type: Sequelize.STRING
      },
      LastName: {
        type: Sequelize.STRING
      },
      FirstName: {
        type: Sequelize.STRING
      },
      Gender: {
        type: Sequelize.STRING
      },
      Height: {
        type: Sequelize.STRING
      },
      Weight: {
        type: Sequelize.STRING
      },
      ShirtNumber: {
        type: Sequelize.STRING
      },
      Email: {
        type: Sequelize.STRING
      },
      CountryCode: {
        type: Sequelize.STRING
      },
      TeamId: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Players');
  }
};