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
//createPoryect("xx", "xx", "11/09/2018", 1);
function createTarea(nombre, descripcion, fechaInicio, fechaLimite, ponderacion, puntuacion, fkIdUsuario)
{ 

  con.connect(function(err)
  {
  /*
    if(err) throw err;
    con.query("SELECT * FROM imagenes", function (err,result,fields)
    {
      con.end();
      if(err) throw err;
      console.log(result);
    }); */

    var post  = {nombre: nombre, descripcion: descripcion, fechaInicio: fechaInicio, fkIdUsuario: fkIdUsuario};
    var query = con.query('INSERT INTO proyectos SET ?', post, function(err, result) {
    // Neat!
    con.end();
  });
 
  console.log(query.sql);

});
}
