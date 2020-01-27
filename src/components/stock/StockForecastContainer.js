import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import StockForecastView from './StockForecastView'

const STOCK_CHART_QUERY = gql`
	query getModels($symbols: [String]!) {
		getModels(criteria: { symbols: $symbols }) {
			symbol
			stock_history
			stock_forecast
		}
	}
`

export default function StockForecastContainer({ symbol }) {
	const { loading, error, data } = useQuery(STOCK_CHART_QUERY, { variables: { symbols: [symbol.toUpperCase()] } })

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error :(</p>

	if (data.getModels && data.getModels.length) {
		return <StockForecastView model={data.getModels}></StockForecastView>
	}

	return null
}
