'use strict';

const { DataTypes } = require('sequelize');
const models = require('../models/index')

module.exports = {
  async up (queryInterface, Sequelize) {
    return Promise.all([
        queryInterface.addColumn('articulo', 'marca', {
          type: DataTypes.STRING(100),
          allowNull: true
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