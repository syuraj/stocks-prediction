require('dotenv').config()
const mongoose = require('mongoose')
const { Model } = require('./mongooseSchema')

mongoose.promise = global.Promise
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = {
	getModels: async (conditions) => {
		return await Model.find(conditions)
			.lean()
			.sort({ _id: -1 })
			.limit(100)
	}
}
