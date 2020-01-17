import types from './types.js';

const getProvisionStatus = isLoading => ({ type: types.GET_PROVISION_STATUS, isLoading });

const updateProvisionStatus = provisionStatus => ({ type: types.UPDATE_PROVISION_STATUS, provisionStatus });

const saveProvision = provisionStatus => ({ type: types.SAVE_PROVISION, provisionStatus });

const setCurrentPage = currentPage => ({ type: types.SET_CURRENT_PAGE, currentPage });

const showNotification = () => ({
	type: types.SHOW_NOTIFICATION
});

const hideNotification = () => ({
	type: types.HIDE_NOTIFICATION
});

export default {
	getProvisionStatus,
	updateProvisionStatus,
	saveProvision,
	setCurrentPage,
	showNotification,
	hideNotification
};
