var connection = require("../config/connection.js");

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


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
        console.log('cb', cb);
        console.log('vals', vals);
        console.log('cols', cols);
        console.log("table", table);
   
        
        var queryString = "INSERT INTO " + table + " (" + cols.toString() + ") VALUES (" + printQuestionMarks(vals.length) + ");" 
        connection.query(queryString, vals, function(err, result){
            if (err) {
                throw err;
            }
            cb(result);
        });

    },
   
    updateOne: function(table, objColVals, condition, cb){
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + condition + ";"
        connection.query(queryString, objColVals, function(err, result){
            if (err) {
                throw err
            }
            cb(result);
        }); 
    },

    deleteOne: function(table, condition, cb){
        var queryString = "DELETE FROM " + table + " WHERE " + condition + ";"
        connection.query(queryString, function(err, result){
            if (err) {
                throw err
            }
            cb(result);
        }); 
    }
}

module.exports = orm;