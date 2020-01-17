import { put, takeEvery, all, call } from 'redux-saga/effects';
import types from './types.js';

const watchSaveProvisionStatus = function* watchGetProvisionStatus() {
	yield takeEvery(types.SAVE_PROVISION, function*(input) {
		try {
			yield put({ type: types.SAVING_PROVISION_STATUS });
			const actionResult = yield call(attemptSaveProvisionStatus, input.provisionStatus);

			yield put({
				type: types.SAVE_PROVISION_COMPLETED,
				provisionStatus: input.provisionStatus,
				isSuccessful: actionResult.isSuccessful,
				actionResult
			});
		} catch (error) {
			console.log('ERROR from sagas: ', error);
			yield put({
				type: types.SAVE_PROVISION_COMPLETED,
				provisionStatus: input.provisionStatus,
				isSuccessful: false,
				actionResult: error
			});
		}
	});
};

const attemptSaveProvisionStatus = provisionStatus => {
	return fetch('/api/provisionStatus', {
		method: 'post',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(provisionStatus)
	}).then(response => {
		if (!response.ok) {
			throw Error(response.statusText);
		}
		return response.json();
	});
};

const saveProvisionSagas = function* homeSaga() {
	yield all([watchSaveProvisionStatus()]);
};

export default saveProvisionSagas;
