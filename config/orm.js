var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, callback) {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    },
    insertOne: function(table, name, callback) {
        var queryString = "INSERT INTO " + table + " (burger_name, devoured) VALUES (?, ?);";

        console.log(queryString);

        connection.query(queryString, [name, 0], function(error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    },

    updateOne: function(table, devoured, burgerId, callback) {
        var queryString = "UPDATE " + table + " SET devoured=" + devoured + " WHERE id=" + burgerId + ";";

        console.log(queryString);

        connection.query(queryString, function(error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    },

    deleteOne: function(table, burgerId, callback) {
        var queryString = "DELETE FROM " + table + " WHERE id=" + burgerId + ";";

        console.log(queryString);

        connection.query(queryString, function(error, result) {
            if (error) {
                throw error;
            }
            callback(result);
        });
    }
};

module.exports = orm;
