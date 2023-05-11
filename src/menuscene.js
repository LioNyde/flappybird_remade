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
        this.load.image('sensor', 'assets/0292.png')
        this.load.image('title', 'assets/titlecard.png')
        this.load.image('end', 'assets/endcard.png')
    }

    create()
    {
        this.title = this.add.sprite(0, 0, 'title')
            .setOrigin(0, 0)
            .setInteractive({useHandCursor: true})
            .on('pointerdown', function() { this.scene.start('Gamescene')}, this)
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