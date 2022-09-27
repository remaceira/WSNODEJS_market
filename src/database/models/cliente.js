'use strict' //Para que no se puedan usar variables no definidas

module.exports = (sequelize, DataTypes) => {

    let cliente = sequelize.define('cliente', { 
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        dni: {
            type: DataTypes.BIGINT,
            allowNull: false
        },
        cuit: {
            type: DataTypes.STRING(11),
            allowNull: true
        },
        email: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        telefono: {
            type: DataTypes.STRING(100),
            allowNull: true
        },
        domicilio: {
            type: DataTypes.STRING,
            allowNull: true
        },
        createdAt: {
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        updatedAt: {
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        },
        deletedAt: {
            type: DataTypes.DATE,
            field: 'deleted_at',
            defaultValue: DataTypes.NOW,
            allowNull: false
        }                
    },
    {
        paranoid: true, //Para que elimine los registros de forma lógica
        freezeTableName: true //Para que no modifique el nombre de la tabla a plural
    })

    cliente.associate = models => {
        //Relaciones de la tabla usuario con otras tablas del modelo
    }

    return cliente
}