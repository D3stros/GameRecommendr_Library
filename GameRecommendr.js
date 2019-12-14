(function(global, $) {
	var GameRecommendr = function(gameGenre) {
		return new GameRecommendr.init(gameGenre);
	};

	GameRecommendr.prototype = {};

	GameRecommendr.init = function(gameGenre) {
		var self = this;

		self.gameGenre = gameGenre || 'AllGames';
	};

	GameRecommendr.init.prototype = GameRecommendr.prototype;

	global.GameRecommendr = global.G$ = GameRecommendr;
})(window, jQuery);
