'use strict';

const models = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.cliente.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          apellido: "Alvarez",
          nombre: "Julián",
          dni: 30454023
        }
      }),
      models.cliente.findOrCreate({
        where: {
          id: "2"
        },
        defaults: {
          apellido: "Fernández",
          nombre: "Enzo",
          dni: 31545823
        }
      }),
      models.cliente.findOrCreate({
        where: {
          id: "3"
        },
        defaults: {
          apellido: "Pezzella",
          nombre: "Germán",
          dni: 28657323
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
