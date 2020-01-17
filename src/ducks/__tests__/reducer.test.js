import reducer from '../reducer.js'

describe('main Reducer test', () => {
	it('should return the initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			isLoading: true,
			isSaveSuccessful: null,
			provisionStatus: {}
		})
	})

	it('should handle GET_PROVISION_STATUS', () => {
		const prevState = {
			isLoading: true,
			isSaveSuccessful: null,
			provisionStatus: {}
		};

		const action = {
			isLoading: undefined,
			type: "GET_PROVISION_STATUS"
		}
		expect(reducer(prevState, action)).toEqual({
			isLoading: true,
			isSaveSuccessful: null,
			provisionStatus: {}
		});
	});

	it('should handle GETTING_PROVISION_STATUS', () => {
		const prevState = {
			isLoading: true,
			isSaveSuccessful: null,
			provisionStatus: {}
		};

		const action = {
			type: "GETTING_PROVISION_STATUS"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: undefined,
			isLoading: true,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrlTemp: undefined,
				ClientIdTemp: undefined,
				ClientSecretTemp: undefined,
				SiteKeyTemp: undefined,
				WorkSpaceIdTemp: undefined
			}
		});
	});

	it('should handle RECEIVED_PROVISION_STATUS with a returned auth record', () => {
		const prevState = {
			actionResult: undefined,
			isLoading: true,
			isSaveSuccessful: null,
			provisionStatus: {}
		};

		const action = {
			actionResult: {
				isSuccessful: true,
				provisionStatus: {
					BaseUrl: "https://onedevperf2.thunderhead.com/",
					ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					Key: "rtim-dts|QA1S1|10777485",
					SiteKey: "ONE-XKVCMQYESA-2036",
					WorkSpaceId: "TNk3MjF",
					encryptionType: "AES",
					mid: 10777485
				}
			},
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				Key: "rtim-dts|QA1S1|10777485",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF",
				encryptionType: "AES",
				mid: 10777485
			},
			type: "RECEIVED_PROVISION_STATUS"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: true,
				provisionStatus: {
					BaseUrl: "https://onedevperf2.thunderhead.com/",
					ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					Key: "rtim-dts|QA1S1|10777485",
					SiteKey: "ONE-XKVCMQYESA-2036",
					WorkSpaceId: "TNk3MjF",
					encryptionType: "AES",
					mid: 10777485
				}
			},
			currentPage: "view",
			isLoading: false,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				Key: "rtim-dts|QA1S1|10777485",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF",
				encryptionType: "AES",
				mid: 10777485
			}
		});
	});

	it('should handle RECEIVED_PROVISION_STATUS without a returned auth record', () => {
		const prevState = {
			actionResult: undefined,
			isLoading: true,
			isSaveSuccessful: null,
			provisionStatus: {}
		};

		const action = {
			actionResult: {
				isSuccessful: false,
				message: "No_Credentials"
			},
			provisionStatus: undefined,
			type: "RECEIVED_PROVISION_STATUS"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: false,
				message: "No_Credentials"
			},
			isLoading: false,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrlTemp: undefined,
				ClientIdTemp: undefined,
				ClientSecretTemp: undefined,
				SiteKeyTemp: undefined,
				WorkSpaceIdTemp: undefined
			}
		});
	});

	it('should handle SET_CURRENT_PAGE', () => {
		const prevState = {
			actionResult: {
				isSuccessful: true,
				provisionStatus: {
					BaseUrl: "https://onedevperf2.thunderhead.com/",
					ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					Key: "rtim-dts|QA1S1|10777485",
					SiteKey: "ONE-XKVCMQYESA-2036",
					WorkSpaceId: "TNk3MjF",
					encryptionType: "AES",
					mid: 10777485
				},
			},
			currentPage: "view",
			isLoading: false,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				Key: "rtim-dts|QA1S1|10777485",
				SiteKey: "ONE-XKVCMQYESA-2036",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF",
				WorkSpaceIdTemp: "TNk3MjF",
				encryptionType: "AES",
				mid: 10777485
			}
		};

		const action = {
			currentPage: {
				currentPage: "edit"
			},
			type: "SET_CURRENT_PAGE"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: true,
				provisionStatus: {
					BaseUrl: "https://onedevperf2.thunderhead.com/",
					ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					Key: "rtim-dts|QA1S1|10777485",
					SiteKey: "ONE-XKVCMQYESA-2036",
					WorkSpaceId: "TNk3MjF",
					encryptionType: "AES",
					mid: 10777485
				}
			},
			currentPage: "edit",
			isLoading: false,
			isSaveSuccessful: undefined,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				Key: "rtim-dts|QA1S1|10777485",
				SiteKey: "ONE-XKVCMQYESA-2036",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF",
				WorkSpaceIdTemp: "TNk3MjF",
				encryptionType: "AES",
				mid: 10777485
			}
		});
	});

	it('should handle UPDATE_PROVISION_STATUS with no existing auth record', () => {
		const prevState = {
			actionResult: {
				isSuccessful: false,
				message: "No_Credentials"
			},
			isLoading: false,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceIdTemp: "TNk3MjF"
			}
		};

		const action = {
			provisionStatus: {
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceIdTemp: "TNk3MjF"
			},
			type: "UPDATE_PROVISION_STATUS"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: false,
				message: "No_Credentials"
			},
			isLoading: false,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceIdTemp: "TNk3MjF"
			}
		});
	});

	it('should handle UPDATE_PROVISION_STATUS with existing auth record', () => {
		const prevState = {
			actionResult: {
				isSuccessful: true,
				provisionStatus: {
					BaseUrl: "https://onedevperf2.thunderhead.com/",
					ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					Key: "rtim-dts|QA1S1|10777485",
					SiteKey: "FAKEVAL",
					WorkSpaceId: "TNk3MjF",
					encryptionType: "AES",
					mid: 10777485
				}
			},
			currentPage: "edit",
			isLoading: false,
			isSaveSuccessful: undefined,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				Key: "rtim-dts|QA1S1|10777485",
				SiteKey: "FAKEVAL",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF",
				WorkSpaceIdTemp: "TNk3MjF",
				encryptionType: "AES",
				mid: 10777485
			}
		};

		const action = {
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				Key: "rtim-dts|QA1S1|10777485",
				SiteKey: "FAKEVAL",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF",
				WorkSpaceIdTemp: "TNk3MjF",
				encryptionType: "AES",
				mid: 10777485
			},
			type: "UPDATE_PROVISION_STATUS"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: true,
				provisionStatus: {
					BaseUrl: "https://onedevperf2.thunderhead.com/",
					ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					Key: "rtim-dts|QA1S1|10777485",
					SiteKey: "FAKEVAL",
					WorkSpaceId: "TNk3MjF",
					encryptionType: "AES",
					mid: 10777485
				}
			},
			currentPage: "edit",
			isLoading: false,
			isSaveSuccessful: undefined,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				Key: "rtim-dts|QA1S1|10777485",
				SiteKey: "FAKEVAL",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF",
				WorkSpaceIdTemp: "TNk3MjF",
				encryptionType: "AES",
				mid: 10777485
			}
		});
	});

	it('should handle SAVE_PROVISION with existing auth record', () => {
		const prevState = {
			actionResult: {
				isSuccessful: true,
				provisionStatus: {
					BaseUrl: "https://onedevperf2.thunderhead.com/",
					ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					Key: "rtim-dts|QA1S1|10777485",
					SiteKey: "FAKEVAL",
					WorkSpaceId: "TNk3MjF",
					encryptionType: "AES",
					mid: 10777485
				},
				currentPage: "edit",
				isLoading: false,
				isSaveSuccessful: undefined,
				provisionStatus: {
					BaseUrl: "https://onedevperf2.thunderhead.com/",
					BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
					ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					Key: "rtim-dts|QA1S1|10777485",
					SiteKey: "FAKEVAL",
					SiteKeyTemp: "ONE-XKVCMQYESA-2036",
					WorkSpaceId: "TNk3MjF",
					WorkSpaceIdTemp: "TNk3MjF",
					encryptionType: "AES",
					mid: 10777485
				}
			}
		};

		const action = {
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF"
			},
			type: "SAVE_PROVISION"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: true,
				provisionStatus: {
					BaseUrl: "https://onedevperf2.thunderhead.com/",
					ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					Key: "rtim-dts|QA1S1|10777485",
					SiteKey: "FAKEVAL",
					WorkSpaceId: "TNk3MjF",
					encryptionType: "AES",
					mid: 10777485
				},
				currentPage: "edit",
				isLoading: false,
				isSaveSuccessful: undefined,
				provisionStatus: {
					BaseUrl: "https://onedevperf2.thunderhead.com/",
					BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
					ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
					ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
					Key: "rtim-dts|QA1S1|10777485",
					SiteKey: "FAKEVAL",
					SiteKeyTemp: "ONE-XKVCMQYESA-2036",
					WorkSpaceId: "TNk3MjF",
					WorkSpaceIdTemp: "TNk3MjF",
					encryptionType: "AES",
					mid: 10777485
				}
			}
		});
	});

	it('should handle SAVE_PROVISION with no existing auth record', () => {
		const prevState = {
			actionResult: {
				isSuccessful: false,
				message: "No_Credentials"
			},
			isLoading: false,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceIdTemp: "TNk3MjF"
			}
		};

		const action = {
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF"
			},
			type: "SAVE_PROVISION"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: false,
				message: "No_Credentials"
			},
			isLoading: false,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceIdTemp: "TNk3MjF"
			}
		});
	});

	it('should handle SAVING_PROVISION_STATUS with no existing auth record', () => {
		const prevState = {
			actionResult: {
				isSuccessful: false,
				message: "No_Credentials"
			},
			isLoading: false,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceIdTemp: "TNk3MjF"
			}
		};

		const action = {
			type: "SAVING_PROVISION_STATUS"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: false,
				message: "No_Credentials"
			},
			isLoading: true,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceIdTemp: "TNk3MjF"
			}
		});
	});

	it('should handle SAVING_PROVISION_STATUS with existing auth record', () => {
		const prevState = {
			actionResult: null,
			currentPage: "edit",
			isLoading: false,
			isNotificationOpen: false,
			isSaveSuccessful: undefined,
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF",
				WorkSpaceIdTemp: "TNk3MjF"
			}
		};

		const action = {
			type: "SAVING_PROVISION_STATUS"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: null,
			currentPage: "edit",
			isLoading: true,
			isNotificationOpen: false,
			isSaveSuccessful: undefined,
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF",
				WorkSpaceIdTemp: "TNk3MjF"
			}
		});
	});

	it('should handle SAVING_PROVISION_COMPLETED with no existing auth record', () => {
		const prevState = {
			actionResult: {
				isSuccessful: false,
				message: "No_Credentials"
			},
			isLoading: true,
			isSaveSuccessful: null,
			provisionStatus: {
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceIdTemp: "TNk3MjF"
			}
		};

		const action = {
			actionResult: {
				isSuccessful: true,
				message: "Integration Settings were successfully updated.",
				messageCode: "SETTINGS_SAVE_SUCCESSFUL_MSG",
				result: "Success"
			},
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF"
			},
			type: "SAVE_PROVISION_COMPLETED"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: true,
				message: "Integration Settings were successfully updated.",
				messageCode: "SETTINGS_SAVE_SUCCESSFUL_MSG",
				result: "Success"
			},
			currentPage: "view",
			isLoading: false,
			isSaveSuccessful: null,
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF"
			}
		});
	});

	it('should handle SAVING_PROVISION_COMPLETED with existing auth record', () => {
		const prevState = {
			actionResult: null,
			currentPage: "edit",
			isLoading: true,
			isNotificationOpen: false,
			isSaveSuccessful: undefined,
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				BaseUrlTemp: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientIdTemp: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				ClientSecretTemp: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				SiteKeyTemp: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF",
				WorkSpaceIdTemp: "TNk3MjF"
			}
		};

		const action = {
			actionResult: {
				isSuccessful: true,
				message: "Integration Settings were successfully updated.",
				messageCode: "SETTINGS_SAVE_SUCCESSFUL_MSG",
				result: "Success"
			},
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF"
			},
			type: "SAVE_PROVISION_COMPLETED"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: true,
				message: "Integration Settings were successfully updated.",
				messageCode: "SETTINGS_SAVE_SUCCESSFUL_MSG",
				result: "Success"
			},
			currentPage: "view",
			isLoading: false,
			isNotificationOpen: false,
			isSaveSuccessful: undefined,
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF"
			}
		});
	});

	it('should handle SHOW_NOTIFICATION ', () => {
		const prevState = {
			actionResult: {
				isSuccessful: true,
				message: "Integration Settings were successfully updated.",
				messageCode: "SETTINGS_SAVE_SUCCESSFUL_MSG",
				result: "Success"
			},
			currentPage: "view",
			isLoading: false,
			isNotificationOpen: false,
			isSaveSuccessful: undefined,
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF"
			}
		};

		const action = {
			type: "SHOW_NOTIFICATION"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: {
				isSuccessful: true,
				message: "Integration Settings were successfully updated.",
				messageCode: "SETTINGS_SAVE_SUCCESSFUL_MSG",
				result: "Success"
			},
			currentPage: "view",
			isLoading: false,
			isNotificationOpen: true,
			isSaveSuccessful: undefined,
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF"
			}
		});
	});

	it('should handle HIDE_NOTIFICATION ', () => {
		const prevState = {
			actionResult: {
				isSuccessful: true,
				message: "Integration Settings were successfully updated.",
				messageCode: "SETTINGS_SAVE_SUCCESSFUL_MSG",
				result: "Success"
			},
			currentPage: "view",
			isLoading: false,
			isNotificationOpen: true,
			isSaveSuccessful: null,
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF"
			}
		};

		const action = {
			type: "HIDE_NOTIFICATION"
		}
		expect(reducer(prevState, action)).toEqual({
			actionResult: null,
			currentPage: "view",
			isLoading: false,
			isNotificationOpen: false,
			isSaveSuccessful: null,
			isSuccessful: true,
			provisionStatus: {
				BaseUrl: "https://onedevperf2.thunderhead.com/",
				ClientId: "744e7e66-1111-4aae-8be0-1fb371ecb0f7",
				ClientSecret: "572c4b56-80bf-48b6-8e49-9e3a18fb6e4c",
				SiteKey: "ONE-XKVCMQYESA-2036",
				WorkSpaceId: "TNk3MjF"
			}
		});
	});
});
