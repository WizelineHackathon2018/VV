console.log('Bacon');

var mysql = require('mysql');

var con  = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "",
    database: "mydb",
  }
);

con.connect(function(err)
{
  if(err) throw err;
  con.query("SELECT * FROM imagenes", function (err,result,fields)
  {
    con.end();
    if(err) throw err;
    console.log(result);
  });
});
