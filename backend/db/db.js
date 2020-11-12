const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host: 'bhpkibxfewlrbwc7bxgf-mysql.services.clever-cloud.com',
  user: 'us2kkoc6l1ikistz',
  password: '9PYkz2RRSpEH0kCbXtmR',
  database: 'bhpkibxfewlrbwc7bxgf',
  multipleStatements: true
});
mysqlConnection.connect(function (err) {
  if (err) {
    console.error(err);
    return;
  } else {
    console.log('base de datos conectada!');
  }
});

module.exports = mysqlConnection;
