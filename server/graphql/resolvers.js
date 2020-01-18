const ModelDbService = require('../db-service/model-db-service')

module.exports = {
	Query: {
		getModels: async (parent, args) => {
			let models = await ModelDbService.getModels(args.criteria)
			return models
		}
	}
}
