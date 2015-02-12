/*
-----------------------------------------------------------------------------------
|
| Dependencies
|
-----------------------------------------------------------------------------------
*/

var mongoose = require('mongoose'),
    config   = require(__dirname + '/config');

/*
-----------------------------------------------------------------------------------
|
| Configuration
|
-----------------------------------------------------------------------------------
*/

mongoose.connect('mongodb://' + config.db.host + '/' + config.db.database);

var Schema   = mongoose.Schema
    ObjectId = Schema.ObjectId;
 
var schema = new Schema({
  id       : ObjectId,
  firstname : String,
  lastname  : String,
  email     : String
});

var User = mongoose.model('User', schema);

/*
-----------------------------------------------------------------------------------
|
| Module
|
-----------------------------------------------------------------------------------
*/

module.exports = {
  User: User
}
