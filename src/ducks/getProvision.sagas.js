import { put, takeEvery, all, call } from 'redux-saga/effects';
import types from './types.js';

const watchGetProvisionStatus = function* watchGetProvisionStatus() {
	yield takeEvery(types.GET_PROVISION_STATUS, function*(input) {
		try {
			yield put({ type: types.GETTING_PROVISION_STATUS });
			const actionResult = yield call(attemptGetProvisionStatus);

			console.log('Printing actionResult', actionResult);

			yield put({ type: types.RECEIVED_PROVISION_STATUS, actionResult, provisionStatus: actionResult.provisionStatus });
		} catch (error) {
			console.log('ERROR from sagas: ', error);
			yield put({
				type: types.RECEIVED_PROVISION_STATUS,
				actionResult: { isSuccessful: false, error }
			});
		}
	});
};

const attemptGetProvisionStatus = () => {
	return fetch('/api/provisionStatus', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json'
		}
	})
		.then(response => response.json())
		.catch(reason => {
			console.log('GET /provisionStatus failed for reason: ', reason);
		});
};

const homeSaga = function* homeSaga() {
	yield all([watchGetProvisionStatus()]);
};

export default homeSaga;
