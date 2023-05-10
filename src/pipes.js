class Pipes extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, texture)
    {
        super(scene, x, y, texture)
        this.setScale(1.3, 1.5)
        this.onOverlap = true
        this.property = {physicsbody: true}
        scene.add.existing(this)
        scene.physics.add.existing(this)
    }
}

class PipesF extends Phaser.Physics.Arcade.Sprite
{
    constructor(scene, x, y, texture)
    {
        super(scene, x, y, texture)
        this.setScale(1.3, 1.5)
        this.setFlipY(true)
        this.onOverlap = true
        scene.add.existing(this)
        scene.physics.add.existing(this)
    }
}