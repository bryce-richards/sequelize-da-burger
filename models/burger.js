module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        paranpid: true
    }, {
        tableName: "burgers"
    }, {
        classMethods: {
            associate: function(models) {
                Burger.belongsTo(models.Customer, {
                    foreignKey: "fk_customer_name",
                    targetKey: "customer_name"
                });
            }
        }
    });
    return Burger;
};
