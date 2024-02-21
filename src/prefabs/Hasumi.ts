// You can write more code here

/* START OF COMPILED CODE */

import Phaser from 'phaser'
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Hasumi extends Phaser.GameObjects.Container {
  constructor(scene: Phaser.Scene, x?: number, y?: number) {
    super(scene, x ?? 0, y ?? 0)

    // texture
    const texture = scene.add.sprite(0, 0, 'down')
    this.add(texture)

    // groundSensor
    const groundSensor = scene.add.rectangle(8, 102, 120, 8)
    groundSensor.isFilled = true
    groundSensor.fillAlpha = 0.1
    this.add(groundSensor)

    // hasumiBody
    const hasumiBody = scene.add.rectangle(-2, -1, 50, 200)
    hasumiBody.isFilled = true
    hasumiBody.fillAlpha = 0.4
    this.add(hasumiBody)

    this.texture = texture
    this.groundSensor = groundSensor
    this.hasumiBody = hasumiBody

    /* START-USER-CTR-CODE */
    this.scene.events.on('create', () => this.create())
    this.scene.events.on('update', () => this.update())

    // Write your code here.
    /* END-USER-CTR-CODE */
  }

  private texture: Phaser.GameObjects.Sprite
  private groundSensor: Phaser.GameObjects.Rectangle
  private hasumiBody: Phaser.GameObjects.Rectangle

  /* START-USER-CODE */

  //   physicsObject!: Phaser.Physics.Matter.Sprite

  create() {
    var Bodies = Phaser.Physics.Matter.Matter.Bodies

    // @ts-ignore
    const mainBody: Phaser.Physics.Matter.Sprite =
      this.scene.matter.add.gameObject(this.hasumiBody, {
        shape: { type: 'rectangle', chamfer: { radius: 10 } },
        // isSensor: true,
        x: this.x,
        y: this.y,
        vertices: [],
      })

    //   this.scene.matter.add.rectangle(0, 0, this.width * 0.6, this.height, {
    //     chamfer: { radius: 30 },
    //   })
    // mainBody.setBounce(0)
    // const mainBody = this.scene.matter.add.rectangle(
    //   0,
    //   0,
    //   this.width * 0.6,
    //   this.height,
    //   {
    //     chamfer: { radius: 10 },
    //   }
    // )

    // @ts-ignore
    const groundSensorBody = this.scene.matter.add.gameObject(
      this.groundSensor,
      {
        shape: { type: 'rectangle', chamfer: { radius: 10 } },
        isSensor: true,
        label: 'ground',
        x: this.x,
        y: this.y,
        vertices: [],
      }
    )

    // const sensors = {
    //   bottom: this.scene.matter.add.rectangle(
    //     0,
    //     this.height * 0.5,
    //     this.width * 0.25,
    //     2,
    //     { isSensor: true }
    //   ),
    // }

    const compoundBody = Phaser.Physics.Matter.Matter.Body.create({
      parts: [mainBody, this.groundSensor],
    })

    // const compoundBody = this.scene.matter.add.gameObject(this, {
    //   //   parts: [mainBody, sensors.bottom],
    //   parts: [mainBody, groundSensorBody],
    //   frictionStatic: 0,
    //   frictionAir: 0.02,
    //   friction: 0.1,
    //   //   render: { sprite: { xOffset: 0.5, yOffset: 0.5 } },
    // })

    // this.physicsObject = this.scene.matter.add.gameObject(this)
    // this.physicsObject.setFrictionAir(0.01)
    // this.physicsObject.setBounce(0.9)
    // this.body.name = 'hasumi'
  }

  update() {}

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
