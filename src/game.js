var config = {
    type: Phaser.AUTO,
    height: 480,
    width: 860,
    pixelArt: true,
    scene: [Menuscene, Gamescene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        }
    }
}

var game = new Phaser.Game(config)