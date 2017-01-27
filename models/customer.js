module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
            customer_name: {
                type: DataTypes.STRING,
                allowNull: false,
                len: [1]
            }
        }, {
            tableName: "customers"
        }, {
            classMethods: {
                associate: function(models) {
                    Customer.hasMany(models.Post, {
                        onDelete: "cascade"
                    });
                }
            }
        }
    );
    return Customer;
};