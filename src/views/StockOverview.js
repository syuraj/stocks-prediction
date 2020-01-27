import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'shards-react'

import SmallStats from './../components/common/SmallStats'
import StockForecast from '../components/stock/StockForecastContainer'

const StockOverview = (props) => {
	const {
		smallStats,
		location: { pathname }
	} = props
	const symbol = pathname.substring(pathname.lastIndexOf('/') + 1)

	return (
		<Container fluid className="main-content-container px-4">
			<Row noGutters className="page-header py-2"></Row>

			<Row>
				<Col lg="12" md="12" sm="12" className="mb-4">
					<StockForecast symbol={symbol} />
				</Col>
			</Row>

			<Row>
				{smallStats.map((stats, idx) => (
					<Col lg="3" md="3" sm="3" className="mb-4" key={idx} {...stats.attrs}>
						<SmallStats
							id={`small-stats-${idx}`}
							variation="1"
							chartData={stats.datasets}
							chartLabels={stats.chartLabels}
							label={stats.label}
							value={stats.value}
							percentage={stats.percentage}
							increase={stats.increase}
							decrease={stats.decrease}
						/>
					</Col>
				))}
			</Row>
		</Container>
	)
}

StockOverview.propTypes = {
	smallStats: PropTypes.array
}

StockOverview.defaultProps = {
	smallStats: [
		{
			label: 'Twitter Sentiment',
			value: '2,390',
			percentage: '4.7%',
			increase: true,
			chartLabels: [null, null, null, null, null, null, null],
			attrs: { md: '6', sm: '6' },
			datasets: [
				{
					label: 'Today',
					fill: 'start',
					borderWidth: 1.5,
					backgroundColor: 'rgba(0, 184, 216, 0.1)',
					borderColor: 'rgb(0, 184, 216)',
					data: [1, 2, 1, 3, 5, 4, 7]
				}
			]
		}
	]
}

export default StockOverview
