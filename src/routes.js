import React from 'react'
import { Redirect } from 'react-router-dom'

// Layout Types
import { DefaultLayout } from './layouts'

// Route Views
import StockOverview from './views/StockOverview'
import UserProfileLite from './views/UserProfileLite'
import Errors from './views/Errors'

export default [
	{
		path: '/',
		exact: true,
		layout: DefaultLayout,
		component: () => <Redirect to="/stock-overview/TSLA" />
	},
	{
		path: '/stock-overview',
		layout: DefaultLayout,
		component: StockOverview
	},
	{
		path: '/user-profile-lite',
		layout: DefaultLayout,
		component: UserProfileLite
	},
	{
		path: '/errors',
		layout: DefaultLayout,
		component: Errors
	}
]
