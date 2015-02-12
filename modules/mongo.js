/*
-----------------------------------------------------------------------------------
|
| Dependencies
|
-----------------------------------------------------------------------------------
*/

var mongoose = require('mongoose');

/*
-----------------------------------------------------------------------------------
|
| Configuration
|
-----------------------------------------------------------------------------------
*/

mongoose.connect('mongodb://localhost/MEAN-CRUD');

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
