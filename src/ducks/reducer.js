import types from './types.js';

export const initialState = {
	provisionStatus: {},
	isLoading: true,
	isSaveSuccessful: null
};

export default function reducer(state = initialState, action) {
	switch (action.type) {
		case types.GETTING_PROVISION_STATUS: {
			return {
				...state,
				provisionStatus: { ...action.provisionStatus },
				actionResult: action.actionResult,
				isLoading: true
			};
		}
		case types.SAVING_PROVISION_STATUS: {
			return {
				...state,
				isLoading: true
			};
		}
		case types.RECEIVED_PROVISION_STATUS: {
            const newState = {
                ...state,
                provisionStatus: { ...action.provisionStatus },
                isLoading: false,
                actionResult: action.actionResult
            };

            if (newState.provisionStatus.ClientId) {
                newState.currentPage = 'view';
            }
            return newState;
		}
		case types.SAVE_PROVISION_COMPLETED: {
			const newState = {
				...state,
				isLoading: false,
				isSuccessful: action.isSuccessful,
				actionResult: action.actionResult
			};

			if (newState.isSuccessful) {
				newState.provisionStatus = action.provisionStatus;
				newState.currentPage = 'view';
			}
			return newState;
		}
		case types.UPDATE_PROVISION_STATUS: {
			return { ...state, provisionStatus: { ...action.provisionStatus } };
		}
		case types.SET_CURRENT_PAGE: {
			const saveValue = action.currentPage === 'edit' ? false : action.isSaveSuccessful;
			return { ...state, ...action.currentPage, isSaveSuccessful: saveValue };
		}
		case types.SHOW_NOTIFICATION: {
			return { ...state, isNotificationOpen: true };
		}
		case types.HIDE_NOTIFICATION: {
			return { ...state, actionResult: null, isNotificationOpen: false };
		}
		default: {
			return state;
		}
	}
}
