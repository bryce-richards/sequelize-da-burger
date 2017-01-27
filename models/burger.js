module.exports = function(sequelize, DataTypes) {
    var Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                min: 2,
                max: 255
            }
        },
        devoured: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    }, {
        tableName: "burgers"
    }, {
            // We're saying that we want our Author to have Posts
            classMethods: {
                associate: function(models) {
                    // An Author (foreignKey) is required or a Post can't be made
                    Burger.belongsTo(models.Customer, {
                        foreignKey: {
                            allowNull: false
                        }
                    });
                }
            }
        }
    );
    return Burger;
};
