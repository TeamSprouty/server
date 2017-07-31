const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const fields = {
	'url' : String,
	'title' : String,
	'caption' : String,
	'plantId' : {
	 	type: Schema.Types.ObjectId,
	 	ref: 'Plant'
	}
}

let ImageSchema = new Schema(fields);

module.exports = mongoose.model('Image', ImageSchema);
