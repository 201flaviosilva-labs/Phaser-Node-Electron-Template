const Ball = require("../Prefabs/Ball.js");

class Game extends Phaser.Scene {
	constructor() {
		super({ key: "Game" });
	}

	init() {
		console.log("Init");
	}

	preload() {
		console.log("Preload");
	}

	create() {
		console.log("Create");
		this.ball = new Ball(this, 100, 100);
	}

	update() {
		console.log("Update");
	}
}

module.exports = { Game };
