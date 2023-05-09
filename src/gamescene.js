class Gamescene extends Phaser.Scene
{
    constructor()
    {
        super('Gamescene')

        this.centerX = game.scale.width/2;
        this.centerY = game.scale.height/2
    }

    create()
    {
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0, 0)
        
        /*
        for(let i = 0; i <= 2; i++)
        {
            this.p1 = this.physics.add.sprite(game.scale.width - 100, game.scale.height, 'pipes')
            .setScale(1.3, 1.5)
            .setVelocityX(-300)
            ;
        
            this.pc1 = this.physics.add.sprite(this.p1.x, this.p1.y - 400, 'pipes')
            .setScale(1.3, 1.3)
            .setVelocityX(-300)
            .setFlipY(true)
            ;
        }*/

        this.pipe = new Pipes(this, game.scale.width - 100, game.scale.height, 'pipes')
        this.pipeF = new PipesF(this, this.pipe.x, this.pipe.y - 400, 'pipes')

        this.player = this.physics.add.sprite(this.centerX, this.centerY, 'player')
            .setScale(.7)
            .setGravityY(700)
        ;
        this.input.keyboard.on('keydown-SPACE', function()
        {
            this.player.setVelocityY(-250)
        }, this);
        //let random = Math.floor(Math.random() * (game.scale.height - 350 + 1) + 350)
        
        this.floor = this.add.tileSprite(this.centerX, game.scale.height - 32, 860, 64, 'floor')
    }

    update(delta)
    {
        this.background.tilePositionX += 3
        this.floor.tilePositionX +=  6        
        
        this.player.angle = (this.player.body.velocity.y > 0) ? 25 : - 25
        
    }
}