module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("Todo", {
        text: DataTypes.STRING,
        complete: DataTypes.BOOLEAN
    });
    return burger;
};