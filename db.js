var mysql = require('mysql')

var pool = {
}

exports.connect = function(done) {
  pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123456',
    port: '3306',
    database: 'maaloka'
  })
  done()
}

exports.get = function() {
  return pool
}
