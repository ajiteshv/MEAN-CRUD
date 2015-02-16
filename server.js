/*
-----------------------------------------------------------------------------------
|
| Dependencies
|
-----------------------------------------------------------------------------------
*/

global.__root = __dirname;

var express    = require('express'),
    bodyParser = require('body-parser'),
    config     = require(__root + '/config'),
    User       = require(__root + '/modules/mongoose').User;

/*
-----------------------------------------------------------------------------------
|
| Server setup
|
-----------------------------------------------------------------------------------
*/

var server = express();
server.use(express.static(__dirname + '/public'));
server.use(bodyParser.urlencoded({ extended: true }));
server.listen(config.port);

console.log("Listening on port " + config.port);

/*
-----------------------------------------------------------------------------------
|
| API setup
|
-----------------------------------------------------------------------------------
*/

// Get all contacts
server.get('/api/contacts', function(req, res) {
  User.find(function(err, users) {
    if (err) res.send(err);
    res.json(users);
  });
});

// Post new contact
server.post('/api/contacts', function(req, res) {
  var user = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email
  });

  user.save(function(err) {
    if (err) res.send(err);
    res.send("Success");
  })
});

// Delete contact
server.delete('/api/contacts/:id', function(req, res) {
  User.remove({ id: ObjectId(req.params.id) }, function(err, user) {
    if (err) res.send(err);
    res.send(user);
  })
})

/*
-----------------------------------------------------------------------------------
|
| Default route
|
-----------------------------------------------------------------------------------
*/

server.get('*', redirectToIndex);

function redirectToIndex(req, res) {
  res.redirect('/');
}
