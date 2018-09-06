var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table, cb){
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, result){
            if (err) {
                throw err
            };
            cb(result);
        });
        
    },
    insertOne: function(table, cols, vals, cb){
        var queryString = "INSERT INTO " + table + "(" + cols.toString() + ") VALUES (" + vals + ");" 
        connection.query(queryString, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
    //Need to ADD HELPER FUNCTION to convert ObjColVals to string
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table + " SET " + objColVals + " WHERE " + condition + ";"
        connection.query(queryString, objColVals, function(err, result){
            if (err) {
                throw err
            }
            cb(result);
        }); 
    }
}

module.exports = orm;