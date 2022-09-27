'use strict' //Para que no se puedan usar variables no definidas

module.exports = (sequelize, DataTypes) => {

    let usuario = sequelize.define('usuario', { 
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: true
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
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

    usuario.associate = models => {
        //Relaciones de la tabla usuario con otras tablas del modelo
    }

    return usuario
}