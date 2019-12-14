$('#submit').click(function() {
	var genre = $('#genre').val();
	var g = G$(genre);
	var text = g.gameRecommend(genre);
	$('#gameRec').html(text);
});
