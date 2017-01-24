/**
 * Starting point of the application.
 *
 * @author Ulrica Skarin
 * @version 1.0.0
 */

const express = require('express'),
    app = require('express')(),
    port = process.env.PORT || 3300,
    http = require('http').createServer(app);

http.listen(port, function (){
    console.log(`~*~Kicking off server at: http://localhost: ${port} + ~*~`);
    console.log('Press CTRL-C to terminate...');
});

app.get('/', function(req, res) {
    res.send('Hello there');
});
