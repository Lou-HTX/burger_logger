var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: 'lg7j30weuqckmw07.cbetxkdyhwsb.us-east-1.rds.amazonaws.com	',
        user: 'vyrgjzdxyx18mr7w',
        password: 'l9c6lhcbkaj30mis',
        database: 'burgers_db'
    })
}

// var connection = mysql.createConnection({
//     host: "localhost",
//     user: "test",
//     password: "Welcome01",
//     database: "burgers_db"
// });


connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

module.exports = connection;