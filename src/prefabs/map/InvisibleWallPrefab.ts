// You can write more code here

/* START OF COMPILED CODE */

import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class InvisibleWallPrefab extends Phaser.GameObjects.Rectangle {

	constructor(scene: Phaser.Scene, x?: number, y?: number, width?: number, height?: number) {
		super(scene, x ?? 0, y ?? 0, width ?? 64, height ?? 64);

		/* START-USER-CTR-CODE */
    this.scene.events.on('create', () => this.create())
    this.scene.events.on('update', () => this.update())
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

  public wall!: Phaser.Physics.Matter.Sprite

  create() {
    this.wall = this.scene.matter.add.gameObject(this, {
      restitution: 0.4,
      isStatic: true,
    })
  }

  update() {}

  // Write your code here.

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
