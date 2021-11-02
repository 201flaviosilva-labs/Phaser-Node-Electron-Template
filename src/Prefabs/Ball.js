class Ball extends Phaser.Physics.Arcade.Sprite {
	constructor(scene, x, y) {
		super(scene, x, y, "");

		this.setRandomPosition();

		scene.add.existing(this);
		scene.physics.add.existing(this);

		this.body.setSize(32, 32);
		this.setCircle(16);
		this.setCollideWorldBounds(true);
		this.setBounce(1);
		this.setVelocity(Phaser.Math.Between(-200, 200), Phaser.Math.Between(-200, 200));
	}
}

module.exports = Ball;
