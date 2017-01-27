module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
            customer_name: {
                primaryKey: true,
                type: DataTypes.STRING,
                allowNull: false,
                len: [1],
                defaultValue: ""
            }
        }, {
            paranoid: true
        }, {
            tableName: "customers"
        }, {
            classMethods: {
                associate: function (models) {
                    Customer.hasOne(models.Burger);
                }
            }
        }
    );
    return Customer;
};