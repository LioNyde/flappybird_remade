var config = {
    type: Phaser.AUTO,
    height: 480,
    width: 860,
    pixelArt: true,
    scene: [Menuscene, Gamescene, Endscene],
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            setWorldBounds: true,
        }
    }
}

var game = new Phaser.Game(config)