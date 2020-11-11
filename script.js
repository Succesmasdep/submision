var ctx = document.getElementById("PieChart").getContext('2d');
var myChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ['01','02','03','04'],
		datasets: [
		{
			label: '# of Votes',
			data: [10,10,10,10],
			backgroundColor: ['blue','green','yellow','red'],
			borderWidth: 1
		}
			]
	}
});
