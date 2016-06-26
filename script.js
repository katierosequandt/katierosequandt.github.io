// load tabletop spreadsheet
var spreadsheet_url = 'https://docs.google.com/spreadsheets/d/19fVpVQuvVgR_6CHYJuHNBnUQEX73o58GdWzK2JWiZ14/pubhtml';
function init() {
		Tabletop.init({ 
            key: spreadsheet_url,
            callback: accessData,
            simpleSheet: false 
        });
	}
 
// access info from google sheet
var projects;
function accessData(data, tabletop) { 
	projects = data.Interactives.elements;
	showInteractives();
}

function showInteractives() {
	for (var i=0; i < projects.length; i++) {
		$('#interactives-grid').append(
            '<div class="item"><div class="table-style">' +
            '<a href="'+ projects[i].link + '"target="blank"><div class="image-wrapper"><img src="' + projects[i].screenshot + '" /></div></a>' +
            '<div class="project-info"><h4 class="h4class"><a href="' + projects[i].link + '" target="blank">' + projects[i].project + '</a></h4>' +
            '<p class="group"><strong>' + projects[i].group + '</strong></p>' +
            '<p class="description">' + projects[i].description + '</p></div></div></div>');
	}
}

$(document).ready(function() {

	init();
});