'use strict';

const models = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.renameColumn('usuario', 'usuarioKey', 'id'),
        queryInterface.changeColumn('usuario', 'id', {
          type: DataTypes.INTEGER
        })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};