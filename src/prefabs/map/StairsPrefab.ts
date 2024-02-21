// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class StairsPrefab extends Phaser.GameObjects.Image {

	constructor(scene: Phaser.Scene, x?: number, y?: number, texture?: string, frame?: number | string) {
		super(scene, x ?? 0, y ?? 0, texture || "RightStair", frame);

		/* START-USER-CTR-CODE */
    this.scene.events.on('create', () => this.create())
    this.scene.events.on('update', () => this.update())
    /* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

  public stairs!: Phaser.Physics.Matter.Sprite

  create() {
    var stairsPoly = '-286 -165 -383 -165 -383 164 -289 165 220 165'

    this.stairs = this.scene.matter.add.gameObject(this, {
      restitution: 0.1,
      isStatic: true,
      shape: { type: 'fromVerts', verts: stairsPoly },
    })
  }

  update() {}

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
