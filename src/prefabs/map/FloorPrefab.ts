// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class FloorPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "floor", frame);

		/* START-USER-CTR-CODE */
    this.scene.events.on('create', () => this.create())
    this.scene.events.on('update', () => this.update())
    /* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

  public floor!: Phaser.Physics.Matter.Sprite

  create() {
    this.floor = this.scene.matter.add.gameObject(this, {
      restitution: 0.4,
      isStatic: true,
    })
    // this.floor.setScale(0.5)
    this.floor.setFrictionAir(1)
    this.floor.setBounce(0.9)
  }

  update() {}

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
