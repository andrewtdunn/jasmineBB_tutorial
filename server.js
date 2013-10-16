var connect = require('connect')
,	http = require('http')
, 	app
;

app = connect()
.use(connect.static('public'))
.use('node_modules/', connect.static('node_modules'))
// for testing, possibly not necessary
//.use('/test', connect.static('public'))
;

http.createServer(app).listen(8082, function(){
	console.log('Running on http://localhost:8082');
});
ess.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Start server
var port = 8000;
app.listen(port, function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

