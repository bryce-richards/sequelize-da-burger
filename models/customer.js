module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [2],
                notEmpty: true
            }
        }
    }, {
        paranoid: true,
        tableName: "customers",
        classMethods: {
            associate: function (models) {
                Customer.hasOne(models.Burger);
            }
        }
    });
    return Customer;
};