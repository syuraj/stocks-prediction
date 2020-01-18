import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Card, CardHeader, CardBody } from 'shards-react'
import { createChart } from 'lightweight-charts'

class StockForecastView extends React.Component {
	constructor(props) {
		super(props)
	}

	componentDidMount() {
		const model = JSON.parse(this.props.model[0].model)
		let chartData = []

		for (let index = 0; index < Object.keys(model.ds).length; index++) {
			const element = { time: moment.unix(model.ds[index] / 1000).format('YYYY-MM-DD'), value: model.yhat[index] }
			chartData.push(element)
		}

		const chart = createChart(this.refs.divRef, { width: this.refs.divRef.offsetWidth, height: 300 })

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
	chartData: PropTypes.object,
	chartOptions: PropTypes.object
}

StockForecastView.defaultProps = {
	chartData: {
		labels: Array.from(new Array(30), (_, i) => (i === 0 ? 1 : i)),
		datasets: [
			{
				label: 'Price',
				fill: false,
				data: [500, 800, 320, 180, 240, 320, 230, 650],
				backgroundColor: 'rgba(0,123,255,0.1)',
				borderColor: 'rgba(0,123,255,1)',
				pointBackgroundColor: '#ffffff',
				pointHoverBackgroundColor: 'rgb(0,123,255)',
				borderWidth: 1.5,
				pointRadius: 0,
				pointHoverRadius: 3
			},
			{
				label: 'Prediction',
				fill: false,
				data: [380, 430, 120, 230, 410, 740, 472, 219],
				backgroundColor: 'rgba(255,65,105,0.1)',
				borderColor: 'rgba(255,65,105,1)',
				pointBackgroundColor: '#ffffff',
				pointHoverBackgroundColor: 'rgba(255,65,105,1)',
				borderDash: [3, 3],
				borderWidth: 1,
				pointRadius: 0,
				pointHoverRadius: 2,
				pointBorderColor: 'rgba(255,65,105,1)'
			}
		]
	}
}

export default StockForecastView
