const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Model = mongoose.model(
	'Model',
	new Schema({
		symbol: { type: String, required: true },
		model: { type: Object, required: true },
		date_created: { type: Date, default: Date.now },
		date_modified: { type: Date, default: Date.now }
	})
)

module.exports = {
	Model
}
