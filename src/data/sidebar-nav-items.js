export default function() {
	return [
		{
			title: 'Tesla',
			to: '/stock-overview/TSLA',
			htmlBefore: '<i class="material-icons">show_chart</i>',
			htmlAfter: ''
		},
		{
			title: 'Netflix',
			htmlBefore: '<i class="material-icons">show_chart</i>',
			to: '/stock-overview/NFLX'
		},
		{
			title: 'Facebook',
			htmlBefore: '<i class="material-icons">show_chart</i>',
			to: '/stock-overview/FB'
		},
		{
			title: 'Errors',
			htmlBefore: '<i class="material-icons">error</i>',
			to: '/errors'
		}
	]
}
