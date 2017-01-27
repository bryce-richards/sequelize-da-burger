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
        paranoid: true,
        tableName: "burgers",
        classMethods: {
            associate: function(models) {
                Burger.belongsTo(models.Customer, {
                    foreignKey: {
                        allowNull: true
                    }
                });
            }
        }
    });
    return Burger;
};
