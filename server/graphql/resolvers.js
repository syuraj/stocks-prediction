const ModelDbService = require('../db-service/model-db-service')

module.exports = {
	Query: {
		getModels: async () => {
			let models = await ModelDbService.getModels()
			return models
		}
	}
}
