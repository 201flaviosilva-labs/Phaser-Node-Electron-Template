// Electron Code

const Phaser = require("phaser");
const baseConfig = require("./src/GameConfigs.js");

const config = {
	...baseConfig,
	type: Phaser.AUTO,
	banner: true,
	audio: true,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
	},
	backgroundColor: "#000000",
	fps: {
		target: 1000,
		forceSetTimeOut: true,
	},
};

const game = new Phaser.Game(config);

