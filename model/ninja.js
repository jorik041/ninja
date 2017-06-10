const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create geolocation Sschema 
const GeoSchema = new Schema ({
    type: {
        type: String, 
        default: "Point"
    }, 

    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
});
//create ninja Scheme & mosel 
const ninjaSchema = new Schema({
    name: {
        type: String, 
        required: [true, 'Name field is required']
    }, 

    rank: {
        type: String
    }, 

    available: {
        type: Boolean, 
        default: false
    }, 

    geometry: GeoSchema

});

const Ninja = mongoose.model('ninja', ninjaSchema);

module.exports = Ninja;