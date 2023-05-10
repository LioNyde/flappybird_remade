class Endscene extends Phaser.Scene
{
    constructor()
    {
        super('Endscene')
    }

    create()
    {
        this.end = this.add.sprite(0, 0, 'end')
            .setOrigin(0, 0)
            .setInteractive({useHandCursor: true})
            .on('pointerdown', function() { this.scene.start('Gamescene') }, this)
    }
}