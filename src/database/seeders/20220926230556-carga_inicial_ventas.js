'use strict';

const models = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.venta.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          fecha: DataTypes.NOW,
          sub_total: 7000.0,
          importe_total: 7000.0,
          clienteId: 1
        }
      }),
      models.venta_item.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          venta_id: 1,
          articulo_id: 1
        }
      }),
      models.venta_item.findOrCreate({
        where: {
          id: "2"
        },
        defaults: {
          venta_id: 1,
          articulo_id: 4
        }
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
