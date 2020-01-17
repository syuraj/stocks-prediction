require('dotenv').config()
const resolvers = require('../resolvers')
const ModelDbService = require('../../db-service/model-db-service')

jest.mock('../../db-service/model-db-service')

describe('resolvers', () => {
	it('getModels Query should call ModelDbService.getModels', async () => {
		const spyGetModels = jest.spyOn(ModelDbService, 'getModels')

		const args = { criteria: {} }
		resolvers.Query.getModels(args)

		expect(spyGetModels).toHaveBeenCalled()
	})
})
