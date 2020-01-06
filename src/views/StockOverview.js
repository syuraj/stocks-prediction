import React from 'react'
import PropTypes from 'prop-types'
import { Container, Row, Col } from 'shards-react'

import SmallStats from './../components/common/SmallStats'
import UsersOverview from './../components/blog/UsersOverview'
import Discussions from './../components/blog/Discussions'

const StockOverview = ({ smallStats }) => (
	<Container fluid className="main-content-container px-4">
		<Row noGutters className="page-header py-2"></Row>

		<Row>
			<Col lg="12" md="12" sm="12" className="mb-4">
				<UsersOverview />
			</Col>
		</Row>

		<Row>
			{smallStats.map((stats, idx) => (
				<Col className="col-lg mb-4" key={idx} {...stats.attrs}>
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

		<Row>
			<Col lg="12" md="12" sm="12" className="mb-4">
				<Discussions />
			</Col>
		</Row>
	</Container>
)

StockOverview.propTypes = {
	/**
	 * The small stats dataset.
	 */
	smallStats: PropTypes.array,
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
					data: [1, 2, 1, 3, 5, 4, 7],
				},
			],
		},
		{
			label: 'Google Trends',
			value: '182',
			percentage: '12.4',
			increase: true,
			chartLabels: [null, null, null, null, null, null, null],
			attrs: { md: '6', sm: '6' },
			datasets: [
				{
					label: 'Today',
					fill: 'start',
					borderWidth: 1.5,
					backgroundColor: 'rgba(23,198,113,0.1)',
					borderColor: 'rgb(23,198,113)',
					data: [1, 2, 3, 3, 3, 4, 4],
				},
			],
		},
		{
			label: 'Analyst Ratings',
			value: '8,147',
			percentage: '3.8%',
			increase: false,
			decrease: true,
			chartLabels: [null, null, null, null, null, null, null],
			attrs: { md: '4', sm: '6' },
			datasets: [
				{
					label: 'Today',
					fill: 'start',
					borderWidth: 1.5,
					backgroundColor: 'rgba(255,180,0,0.1)',
					borderColor: 'rgb(255,180,0)',
					data: [2, 3, 3, 3, 4, 3, 3],
				},
			],
		},
		{
			label: 'Revenue',
			value: '29',
			percentage: '2.71%',
			increase: false,
			decrease: true,
			chartLabels: [null, null, null, null, null, null, null],
			attrs: { md: '4', sm: '6' },
			datasets: [
				{
					label: 'Today',
					fill: 'start',
					borderWidth: 1.5,
					backgroundColor: 'rgba(255,65,105,0.1)',
					borderColor: 'rgb(255,65,105)',
					data: [1, 7, 1, 3, 1, 4, 8],
				},
			],
		},
	],
}

export default StockOverview
