var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var Restaurant = new Schema({
  _id : ObjectId,
  address : Object,
  borough : String,
  grades : Array,
  name : String,
  restaurant_id : String
});

Restaurant.query.findAll = function() {
  return this.find();
};

var Restaurants = mongoose.model('restaurants', Restaurant);

Restaurants.find().findAll().exec(function(err, docs){
  console.log(docs);
});
// Restaurants.find(, function (err, docs) {
//   console.log(docs);
// });
