var express = require('express'),
    app = express();

app.get('/', require('./lib/server'));
module.exports = app;

//app.listen(8888);
