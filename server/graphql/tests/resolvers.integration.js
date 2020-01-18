require('dotenv').config()
const resolvers = require('../resolvers')
const ModelDbService = require('../../db-service/model-db-service')

describe('resolvers', () => {
	it('getModels Query should call ModelDbService.getModels', async () => {
		const spyGetModels = jest.spyOn(ModelDbService, 'getModels')

		const args = { criteria: { symbols: ['TSLA'] } }
		const models = await resolvers.Query.getModels(null, args)

		expect(spyGetModels).toHaveBeenCalled()
		expect(models).toHaveLength(1)
	})
})
