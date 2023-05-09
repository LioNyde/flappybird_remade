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
        
        this.pipebottom = this.physics.add.group(this.pipes)
        this.pipes = this.physics.add.sprite(game.scale.width - 100, game.scale.height, 'pipes')
            .setScale(1.3, 1.5)
            .setVelocityX(-300)
        ;
        
        this.pipetop = this.physics.add.group(this.pipesceil)
        this.pipesceil = this.physics.add.sprite(this.pipes.x, this.pipes.y - 400, 'pipes')
            .setScale(1.3, 1.3)
            .setVelocityX(-300)
            .setFlipY(true)
        ;
        
        this.player = this.physics.add.sprite(this.centerX, this.centerY, 'player')
            .setScale(.7)
            .setGravityY(700)
        ;
        this.input.keyboard.on('keydown-SPACE', function()
        {
            this.player.setVelocityY(-250)
            
            console.log('SPACE pressed!')
        }, this);
        
        this.input.keyboard.on('keydown-ESC', function()
        {
            this.scene.pause(this.scene.kay)
            if (this.scene.isPaused(this.scene.key)) { this.scene.run(this.scene.key)}
        }, this);
        
        //let random = Math.floor(Math.random() * (game.scale.height - 350 + 1) + 350)
        console.log(Phaser.Math.Between(350, 480))
        
        this.floor = this.add.tileSprite(this.centerX, game.scale.height - 32, 860, 64, 'floor')
    }

    update(delta)
    {
        this.background.tilePositionX += 3
        this.floor.tilePositionX +=  6
        
        if(this.pipes.x = this.centerX)
        {
           for(const obj of this.pipetop.getChildren())
           {
                body.setPosition(game.scale.width, game.sacle.height)
           } 
        }

    }
}