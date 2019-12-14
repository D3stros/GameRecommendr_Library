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
		HTMLgameRecommend: function(selector) {
			if (!$) {
				throw 'Method needs jQuery!';
			}

			if (!selector) {
				throw 'jQuery selector is needed here';
			}

			msg = this.gameRecommend();

			$(selector).html(msg);

			return this;
		},
		gameGenre: function() {
			return this.gameGenre;
		},
		gameRecommend: function(gameGenre) {
			if (this.gameGenre === 'Strategy') {
				var game = randomGame(strategy.strategyGames);
				return game;
			} else if (this.gameGenre === 'Shooter') {
				var game = randomGame(shooter.shooterGames);
				return game;
			} else if (this.gameGenre === 'RPG') {
				var game = randomGame(rpg.rpgGames);
				return game;
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
