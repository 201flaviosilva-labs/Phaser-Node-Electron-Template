const { Game } = require("./Scenes/Game.js");

const baseConfig = {
	width: 800,
	height: 600,
	type: Phaser.HEADLESS,
	banner: false,
	audio: false,
	fps: {
		target: 1000,
		forceSetTimeOut: true,
	},
	physics: {
		default: "arcade",
		arcade: {
			gravity: { x: 0, y: 100, },
			debug: true,
		},
	},
	scene: [
		Game
	],
};

module.exports = baseConfig;
