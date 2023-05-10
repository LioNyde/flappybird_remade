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
//      B A C K G R O U N D
        this.background = this.add.tileSprite(0, 0, config.width, config.height, 'background').setOrigin(0, 0)

//       P L A Y E R
        this.player = this.physics.add.sprite(this.centerX, this.centerY, 'player')
            .setScale(.65)
            .setGravityY(700)
            .setMass(100)
        ;
        this.player.body.onOverlap = true
        this.input.keyboard.on('keydown-SPACE', function()
        {
            this.player.setVelocityY(-280)
        }, this);

//      O B S T A C L E
        this.pipe1 = new Pipes(this, game.scale.width,  480, 'pipes')
        this.pipeF1 = new PipesF(this, this.pipe1.x, this.pipe1.y - 410, 'pipes')

        this.pipe2 = new Pipes(this, game.scale.width + 430, 350, 'pipes')
        this.pipeF2 = new PipesF(this, this.pipe2.x, this.pipe2.y - 410, 'pipes')

        this.pipe3 = new Pipes(this, this.pipe2.x + 430, game.scale.height - 20, 'pipes')
        this.pipeF3 = new PipesF(this, this.pipe3.x, this.pipe3.y - 410, 'pipes')

//      F L O O R
        this.floor = this.add.tileSprite(this.centerX, game.scale.height - 32, 860, 64, 'floor')
        
//      F P S
        this.fps = this.add.text(50, 50, '', {color: '#000000'})

//      P H Y S I C S
        this.physicsgrp = [[this.pipe1, this.pipeF1], [this.pipe2, this.pipeF2], [this.pipe3, this.pipeF3]];
        for(const subgrp of this.physicsgrp)
        {
            this.physics.add.overlap(this.player, subgrp)
        }
        this.physics.world.once('overlap', function()
        {
            this.scene.start(this.scene.key)
            
        }, this)
    }

    update(time, delta)
    {
        let randomY = Phaser.Math.Between(350, 480)
//      P A R A L L A X  B A C K G R O U N D
        this.background.tilePositionX += 3
        this.floor.tilePositionX +=  6
        
        this.fps.text = 'fps: ' + Math.floor(delta)
        this.player.angle = (this.player.body.velocity.y > 0) ? 15 : - 15

//      SET WALLS VELOCITY
        this.pipe1.setVelocityX(-10 * delta)
        this.pipeF1.setVelocityX(-10 * delta)

        this.pipe2.setVelocityX(-10 * delta)
        this.pipeF2.setVelocityX(-10 * delta)
        
        this.pipe3.setVelocityX(-10 * delta)
        this.pipeF3.setVelocityX(-10 * delta)

//      CHANGE WALL POSITION FOR REPETITION
        if(this.pipe1.x <= 0)
        {
            this.pipe1.x = this.pipe3.x + 430
            this.pipeF1.x = this.pipe1.x
            this.pipe1.y = randomY
            this.pipeF1.y = randomY - 430
        }
        if(this.pipe2.x <= 0)
        {
            this.pipe2.x = this.pipe1.x + 430
            this.pipeF2.x = this.pipe2.x
            this.pipe2.y = randomY
            this.pipeF2.y = randomY - 430
        }
        if(this.pipe3.x <= 0)
        {
            this.pipe3.x = this.pipe2.x + 430
            this.pipeF3.x = this.pipe3.x
            this.pipe3.y = randomY
            this.pipeF3.y = randomY - 430
        }
    }
}
/*
--NEW
-changes in player sprite
-changes in title scene
-randomY pos for obstacles
*/