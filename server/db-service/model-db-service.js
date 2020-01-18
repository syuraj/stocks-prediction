require('dotenv').config()
const mongoose = require('mongoose')
const { Model } = require('./mongooseSchema')

mongoose.promise = global.Promise
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })

module.exports = {
	getModels: async (criteria) => {
		console.log('Printing criteria', criteria)
		return await Model.find({ symbol: { $in: criteria.symbols } })
			.lean()
			.sort({ _id: -1 })
			.limit(10)
	}
}
