/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from 'react'
import { Row, Col, Card, CardBody, Badge } from 'shards-react'

class NewsPosts extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			PostsList: [
				{
					backgroundImage: require('../../images/content-management/5.jpeg'),
					category: 'Travel',
					categoryTheme: 'info',
					author: 'Anna Ken',
					authorAvatar: require('../../images/avatars/0.jpg'),
					title: 'Attention he extremity unwilling on otherwise cars backwards yet',
					body:
						'Conviction up partiality as delightful is discovered. Yet jennings resolved disposed exertion you off. Left did fond drew fat head poor jet pan flying over...',
					date: '29 February 2019',
				},
				{
					backgroundImage: require('../../images/content-management/6.jpeg'),
					category: 'Business',
					categoryTheme: 'dark',
					author: 'John James',
					authorAvatar: require('../../images/avatars/1.jpg'),
					title: 'Totally words widow one downs few age every seven if miss part by fact',
					body:
						'Discovered had get considered projection who favourable. Necessary up knowledge it tolerably. Unwilling departure education to admitted speaking...',
					date: '29 February 2019',
				},
			],
		}
	}

	render() {
		const { PostsList } = this.state

		return (
			<Row>
				{PostsList.map((post, idx) => (
					<Col lg="12" sm="12" className="mb-4" key={idx}>
						<Card small className="card-post card-post--aside card-post--1">
							<div className="card-post__image" style={{ backgroundImage: `url('${post.backgroundImage}')` }}>
								<Badge pill className={`card-post__category bg-${post.categoryTheme}`}>
									{post.category}
								</Badge>
								<div className="card-post__author d-flex">
									<a
										href="#"
										className="card-post__author-avatar card-post__author-avatar--small"
										style={{ backgroundImage: `url('${post.authorAvatar}')` }}>
										Written by Anna Ken
									</a>
								</div>
							</div>
							<CardBody>
								<h5 className="card-title">
									<a className="text-fiord-blue" href="#">
										{post.title}
									</a>
								</h5>
								<p className="card-text d-inline-block mb-3">{post.body}</p>
								<span className="text-muted">{post.date}</span>
							</CardBody>
						</Card>
					</Col>
				))}
			</Row>
		)
	}
}

export default NewsPosts
