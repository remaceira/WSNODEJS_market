'use strict';

const models = require('../models/index');

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
      models.usuario.findOrCreate({
        where: {
          id: "1"
        },
        defaults: {
          username: "admin",
          password: "1234",
          apellido: "Maceira",
          nombre: "Ezequiel",
          email: "remaceira@gmail.com"
        }
      }),
      models.usuario.findOrCreate({
        where: {
          id: "2"
        },
        defaults: {
          username: "prueba",
          password: "1234",
          apellido: "NodeJS",
          nombre: "Tp2",
          email: "prueba@gmail.com"
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
