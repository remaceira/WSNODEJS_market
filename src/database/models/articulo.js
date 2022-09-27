'use strict' //Para que no se puedan usar variables no definidas

module.exports = (sequelize, DataTypes) => {

    let articulo = sequelize.define('articulo', { 
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        codigo: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        nombre: {
            type: DataTypes.STRING(100),
            allowNull: false
        },
        precio_compra: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        precio_venta: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        marca: {
            type: DataTypes.STRING(100),
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

    articulo.associate = models => {
        //Relaciones de la tabla articulo con otras tablas del modelo
        articulo.hasMany(models.venta_item)
    }

    return articulo
}