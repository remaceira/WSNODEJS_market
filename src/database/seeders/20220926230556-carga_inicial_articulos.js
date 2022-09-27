'use strict';

const models = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.articulo.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          codigo: "00001",
          nombre: "REMERA T1-4",
          marca: "MIMO",
          precio_compra: 1500.0,
          precio_venta: 2500.0
        }
      }),
      models.articulo.findOrCreate({
        where: {
          id: "2"
        },
        defaults: {
          codigo: "00002",
          nombre: "REMERA T5-16",
          marca: "MIMO",
          precio_compra: 1800.0,
          precio_venta: 2800.0
        }
      }),
      models.articulo.findOrCreate({
        where: {
          id: "3"
        },
        defaults: {
          codigo: "00003",
          nombre: "BUZO T1-4",
          marca: "MIMO",
          precio_compra: 2500.0,
          precio_venta: 3900.0
        }
      }),
      models.articulo.findOrCreate({
        where: {
          id: "4"
        },
        defaults: {
          codigo: "00004",
          nombre: "BUZO T5-16",
          marca: "MIMO",
          precio_compra: 3100.0,
          precio_venta: 4500.0
        }
      }),
      models.articulo.findOrCreate({
        where: {
          id: "5"
        },
        defaults: {
          codigo: "00005",
          nombre: "ROMPEVIENTO T1-4",
          marca: "MIMO",
          precio_compra: 5500.0,
          precio_venta: 8500.0
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
