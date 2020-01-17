require('dotenv').config()
const ModelDbService = require('../model-db-service')

describe('model-db-service', () => {
	it('getModels should fetch Models from db.', async () => {
		const models = await ModelDbService.getModels()

		expect(models.length).toBeGreaterThan(0)
	})
})
