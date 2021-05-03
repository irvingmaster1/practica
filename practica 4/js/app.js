import SceneA from './scenes/SceneA.js'

var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: [SceneA],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    }
};

var game = new Phaser.Game(config);