const express = require('express')
const app = express()

app.get('/', function (req, res) {
  var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080,
    ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0',
    mysqlURL = process.env.OPENSHIFT_MYSQL_DB_URL || process.env.MYSQL_URL,
    mysqlUSER = process.env.OPENSHIFT_MYSQL_USER || process.env.MYSQL_USER,
    mongoURLLabel = "";
  res.send('Hello World!' + mysqlUSER);
})

app.listen(8080, function () {
  console.log('Example app listening on port 3000!')
})