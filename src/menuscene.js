class Menuscene extends Phaser.Scene
{
    constructor()
    {
        super('Menuscene')

        this.centerX = game.scale.width/2;
        this.centerY = game.scale.height/2
    }

    preload()
    {
        this.load.image('background', 'assets/background.png')
        this.load.image('floor', 'assets/floor.png')
        this.load.image('pipes', 'assets/pipes.png')
        this.load.image('player', 'assets/player.png')
        this.load.image('sensor', 'assets/sensor.png')
    }

    create()
    {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0, 0)

        this.playtxt = this.add.text(game.scale.width - 100, game.scale.height - 100, 'play', {color: 'black', fontSize: 30})
            .setOrigin(0.5, 0.5)
            .setInteractive({useHandCursor: true})
            .on('pointerdown', function() { this.scene.start('Gamescene')}, this)
        ;
        this.floor = this.add.tileSprite(this.centerX, game.scale.height - 32, 860, 64, 'floor')
        //this.scene.start('Gamescene')
    }

    update()
    {
        this.background.tilePositionX += 3
        this.floor.tilePositionX += 6
    }
}

Phaser.Physics.Matter.Matter.Engine._bodiesApplyGravity = function (bodies, gravity)
{
    var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001;
    var bodiesLength = bodies.length;
      
    if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0)
    {
        return;
    }
      
    for (var i = 0; i < bodiesLength; i++)
    {
        var body = bodies[i];
      
        if (body.ignoreGravity || body.isStatic || body.isSleeping)
        {
            continue;
        }

        body.force.y += body.mass * gravity.y * gravityScale;
        body.force.x += body.mass * gravity.x * gravityScale;
    }
};  