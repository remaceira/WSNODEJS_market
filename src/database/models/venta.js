'use strict' //Para que no se puedan usar variables no definidas

module.exports = (sequelize, DataTypes) => {

    let venta = sequelize.define('venta', { 
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        fecha: {
            type: DataTypes.DATE,
            allowNull: false
        },
        sub_total: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        monto_iva: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        porcentaje_iva: {
            type: DataTypes.FLOAT,
            allowNull: true
        },
        importe_total: {
            type: DataTypes.FLOAT,
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

    venta.associate = models => {
        //Relaciones de la tabla venta con otras tablas del modelo.
        venta.belongsTo(models.cliente)
        venta.hasMany(models.venta_item)
    }

    return venta
}