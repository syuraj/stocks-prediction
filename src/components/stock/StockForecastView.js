import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Card, CardHeader, CardBody } from 'shards-react'
import { createChart } from 'lightweight-charts'

class StockForecastView extends React.Component {
	componentDidMount() {
		const model = JSON.parse(this.props.model[0].model)
		let chartData = []

		for (let index = 0; index < Object.keys(model.ds).length; index++) {
			const element = { time: moment.unix(model.ds[index] / 1000).format('YYYY-MM-DD'), value: model.yhat[index] }
			chartData.push(element)
		}

		const chartOptions = {
			width: this.refs.divRef.offsetWidth,
			height: 300,
			grid: {
				horzLines: {
					color: '#fef'
				},
				vertLines: {
					color: '#fef'
				}
			}
		}

		const chart = createChart(this.refs.divRef, chartOptions)

		const lineSeries = chart.addLineSeries()
		lineSeries.setData(chartData)
	}

	render() {
		const { title } = this.props

		return (
			<Card small className="h-100">
				<CardHeader className="border-bottom">
					<h6 className="m-0">{title}</h6>
				</CardHeader>
				<CardBody className="pt-0">
					<div height="300" ref="divRef" style={{ maxWidth: '100% !important' }} />
				</CardBody>
			</Card>
		)
	}
}

StockForecastView.propTypes = {
	title: PropTypes.string,
	model: PropTypes.object
}

export default StockForecastView
