import React from 'react'
import { useQuery } from '@apollo/react-hooks'
import { gql } from 'apollo-boost'
import StockForecastView from './StockForecastView'

const STOCK_CHART_QUERY = gql`
	{
		getModels {
			symbol
			model
		}
	}
`

export default function StockForecastContainer() {
	const { loading, error, data } = useQuery(STOCK_CHART_QUERY)

	if (loading) return <p>Loading...</p>
	if (error) return <p>Error :(</p>

	return <StockForecastView model={data.getModels}></StockForecastView>
}
