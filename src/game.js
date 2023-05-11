var config = {
    type: Phaser.AUTO,
    height: 480,
    width: 860,
    pixelArt: true,
    scene: [Menuscene, Gamescene, Endscene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            setWorldBounds: true,
        }
    }
}

var game = new Phaser.Game(config)