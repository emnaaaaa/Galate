

  var mysql = require('mysql');


module.exports = {
    port: process.env.PORT || 3000,
    env: process.env.NODE_ENV || 'development',
   

    con : mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "wqtqVSROVpdhilqI00",
        //password: "tbEsNGfMcF8Htt7n",
        //password: "root",
        database: "galate1",
        port: 3306
    }),

    mediane: 6,
  };
  