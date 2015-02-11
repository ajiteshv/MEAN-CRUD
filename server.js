/*
-----------------------------------------------------------------------------------
|
| Dependencies
|
-----------------------------------------------------------------------------------
*/

var express = require('express'),
    config = require(__dirname + '/config'),
    faker = require('faker');

/*
-----------------------------------------------------------------------------------
|
| Server setup
|
-----------------------------------------------------------------------------------
*/

var server = express();
server.use(express.static(__dirname + '/public'));
server.listen(config.port);

/*
-----------------------------------------------------------------------------------
|
| API setup
|
-----------------------------------------------------------------------------------
*/

server.get('/api/contacts', function(req, res) {
  // Return all contacts
});

server.post('/api/contacts', function(req, res) {
  // Create new contact
});

server.get('/api/contacts/:id', function(req, res) {
  // Get a contact
});

/*
-----------------------------------------------------------------------------------
|
| Configure routes
|
-----------------------------------------------------------------------------------
*/

server.get('*', redirectToIndex);

function redirectToIndex(req, res) {
  res.redirect('/');
}






