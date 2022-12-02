// You can write more code here

/* START OF COMPILED CODE */

import Phaser from 'phaser'
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class MMScene extends Phaser.Scene {
  constructor() {
    super('MMScene')

    /* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  editorCreate(): void {
    // arcadeimage_1
    const arcadeimage_1 = this.physics.add.image(661, 750, 'L_Ground_G03')
    arcadeimage_1.scaleX = 4
    arcadeimage_1.body.setSize(303, 121, false)

    // hasumi
    const hasumi = this.physics.add.sprite(548, 583, 'down')
    hasumi.body.setSize(200, 200, false)

    // l_Ground_G03
    const l_Ground_G03 = this.add.image(549, 195, 'L_Ground_G03')
    l_Ground_G03.scaleY = 0.02

    // collider
    this.physics.add.collider(hasumi, arcadeimage_1)

    this.arcadeimage_1 = arcadeimage_1
    this.hasumi = hasumi

    this.events.emit('scene-awake')
  }

  private arcadeimage_1!: Phaser.Physics.Arcade.Image
  private hasumi!: Phaser.Physics.Arcade.Sprite

  /* START-USER-CODE */

  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys
  private jumping?: boolean = false
  private flip!: boolean = false

  // Write your code here

  create() {
    this.editorCreate()

    this.arcadeimage_1.setCollideWorldBounds(true)
    this.hasumi.setCollideWorldBounds(true)
    this.hasumi.setVelocity(0, 200)
    this.hasumi.setBounce(0)

    this.cursors = this.input.keyboard.createCursorKeys()
  }

  // JUMP : 1.5x player.height

  update() {
    if (this.cursors?.left.isDown) {
      this.hasumi.setVelocityX(-200 * 3) // move left
    } else if (this.cursors?.right.isDown) {
      this.hasumi.setVelocityX(200 * 3) // move right
    } else {
      if (this.hasumi.body.blocked.down) {
        this.hasumi.setVelocityX(0)
      }
    }

    if (
      (this.hasumi.body.velocity.x < 0 && !this.flip) ||
      (this.hasumi.body.velocity.x > 0 && this.flip)
    ) {
      this.flip = this.hasumi.body.velocity.x < 0
      this.hasumi.flipX = this.flip
    }

    if (this.hasumi.body.blocked.down) {
      this.hasumi.setTexture('down')
      this.jumping = false
    } else {
      if (this.hasumi.body.velocity.y > 0) {
        this.hasumi.setTexture('fall')
      }
    }

    if (
      /*(*/ this.cursors?.space.isDown &&
      !this.jumping /*|| this.cursors?.up.isDown) &&
      this.hasumi.onFloor()*/
    ) {
      this.hasumi.setTexture('jump')
      this.jumping = true
      this.hasumi.setVelocityY(-1400) // jump up
    }
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
