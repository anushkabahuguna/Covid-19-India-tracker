$(document).ready(() => {
	$.getJSON('https://covid-api.mmediagroup.fr/v1/cases?country=India')
		.done((res) => {
			console.log(res['All']['confirmed']);
			$('.confirmed ').text(res['All']['confirmed'].toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'));
			$('.recovered ').text(res['All']['recovered'].toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'));
			$('.deaths ').text(res['All']['deaths'].toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'));
			$('.current-pop ').text(res['All']['population'].toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'));
			$('.life-expectancy ').text(res['All']['life_expectancy'].toString().replace(/(\d)(?=(\d\d)+\d$)/g, '$1,'));
		})
		.fail((err) => {});
});
