'use strict';

const models = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.renameColumn('venta_item', 'ventumId', 'venta_id'),
        queryInterface.renameColumn('venta_item', 'articuloId', 'articulo_id')        
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