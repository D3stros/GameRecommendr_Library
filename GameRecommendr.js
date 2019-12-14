(function(global, $) {
	var GameRecommendr = function(gameGenre) {
		return new GameRecommendr.init(gameGenre);
	};

	function randomGame(input) {
		var randomNumber = Math.floor(Math.random() * input.length);
		return input[randomNumber];
	}

	var strategy = {
		strategyGames: [
			'Civilization 6',
			'Crusader Kings2',
			'Stellaris',
			'Anno 1800'
		]
	};

	var shooter = {
		shooterGames: [
			'CounterStrike',
			'Rainbow Six',
			'Playerunknowns Battlegrounds'
		]
	};

	var rpg = {
		rpgGames: ['Zelda', 'The Witcher', 'The Elder Scrolls']
	};

	GameRecommendr.prototype = {
		gameGenre: function() {
			return this.gameGenre;
		},
		gameRecommend: function(gameGenre) {
			if (this.gameGenre === 'Strategy') {
				var game = randomGame(strategy.strategyGames);
				console.log(game);
			} else if (this.gameGenre === 'Shooter') {
				var game = randomGame(shooter.shooterGames);
				console.log(game);
			} else if (this.gameGenre === 'RPG') {
				var game = randomGame(rpg.rpgGames);
				console.log(game);
			}
		}
	};

	GameRecommendr.init = function(gameGenre) {
		var self = this;

		self.gameGenre = gameGenre || 'AllGames';
	};

	GameRecommendr.init.prototype = GameRecommendr.prototype;

	global.GameRecommendr = global.G$ = GameRecommendr;
})(window, jQuery);
