$(document).ready(() => {
	$.getJSON('https://covid-api.mmediagroup.fr/v1/cases?country=India')
		.done((res) => {
			console.log(res['All']['confirmed']);
			$('.two .confirmed ').text(res['All']['confirmed'].toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'));
			$('.two .recovered ').text(res['All']['recovered'].toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'));
			$('.two .deaths ').text(res['All']['deaths'].toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'));
			$('.two .current-pop ').text(res['All']['population'].toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'));
			$('.two .life-expectancy ').text(
				res['All']['life_expectancy'].toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,')
			);
		})
		.fail((err) => {});
});
