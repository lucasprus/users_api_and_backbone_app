/**
 * Module dependencies.
 */
var express = require('express');
var fs = require('fs');
var dbURI = 'mongodb://' + process.env.DATABASE_USER + ':' + process.env.DATABASE_PASSWORD + '@dharma.mongohq.com:10073/lucasprus';
var db = require('mongoose').connect(dbURI);
var app = module.exports = express.createServer();
// Configuration
var logFile = fs.createWriteStream('./access.log', {
    flags: 'a'
});
app.use(express.logger({
    stream: logFile
}));
app.use(express.compress());
app.use(express.bodyParser());
app.use(express.methodOverride());
// app.all('*', express.basicAuth('username', 'password'));
// app.use(express.basicAuth('username', 'password'));
/* 
app.use(express.cookieParser('x6f517kW88eEbmSAWRER8SL578CDCu1ot6Tqlt272sn9sRjrQa'));
app.use(express.session({
    secret: 'x6f517kW88eEbmSAWRER8SL578CDCu1ot6Tqlt272sn9sRjrQa',
    maxAge: 3600000
})); 
*/
app.use(express.static(__dirname + '/public'));
if ('development' === app.get('env')) {
    app.use(express.errorHandler({
        dumpExceptions: true,
        showStack: true
    }));
}
if ('production' === app.get('env')) {
    app.use(express.errorHandler());
}
// Routes
require('./routes/users')(app);
app.listen(3000, function () {
    console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
