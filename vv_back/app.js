const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(fileUpload());
app.use('/public', express.static(__dirname + '/public'));


app.post('/upload', (req, res, next) => {
  console.log(req);
  /*
  let imageFile = req.files.file;

  imageFile.mv(`${__dirname}/public/${req.body.filename}.jpg`, function(err) {
    if (err) {
      return res.status(500).send(err);
    }

    res.json({file: `public/${req.body.filename}.jpg`});
  }); */

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
  /*
    if(err) throw err;
    con.query("SELECT * FROM imagenes", function (err,result,fields)
    {
      con.end();
      if(err) throw err;
      console.log(result);
    }); */

    var post  = {nombre: req.body.usuario, correo: "xx", contraseña: req.body.contraseña, fkIdImagenes: 1};
    var query = con.query('INSERT INTO usuarios SET ?', post, function(err, result) {
    // Neat!
    con.end();
  });
 
  console.log(query.sql);

});


})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

app.listen(8000, () => {
  console.log('8000');
});

module.exports = app;