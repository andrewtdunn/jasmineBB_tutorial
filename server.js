// Module dependencies
var application_root = __dirname, 
	express = require( 'express' ), // Web framework
	path = require( 'path' ); // Utilities for Dealing with filepaths
	//mongoose = require( 'mongoose' ); // MongoDB integration

// Create server
var app = express();

// Configure server
app.configure( function() {
	// parse request body and populate request.body
	app.use( express.bodyParser() );

	// checks request.body for HTTP method overrides
	app.use( express.methodOverride() );

	// perform route lookup based on URL and HTTP method
	app.use( app.router );

	// where to server static content
	app.use( express.static( path.join( application_root, 'public' ) ) );

	// Show all errors in development
	app.use( express.errorHandler({ dumpExceptions: true, showStack: true }));
});

// Start server
var port = 8000;
app.listen(port, function(){
	console.log('Express server listening on port %d in %s mode', port, app.settings.env);
});

