module.exports = function(sequelize, DataTypes) {
    var Customer = sequelize.define("Customer", {
        customer_name: {
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
        tableName: "customers"
    });
    return Burger;
};

module.exports = function(sequelize, DataTypes) {
    var Author = sequelize.define("Author", {
            // Giving the Author model a name of type STRING
            name: DataTypes.STRING
        },
        // Here we'll pass a second "classMethods" object into the define method
        // This is for any additional configuration we want to give our models
        {
            // We're saying that we want our Author to have Posts
            classMethods: {
                associate: function(models) {
                    // Associating Author with Posts
                    // When an Author is deleted, also delete any associated Posts
                    Author.hasMany(models.Post, {
                        onDelete: "cascade"
                    });
                }
            }
        }
    );
    return Author;
};