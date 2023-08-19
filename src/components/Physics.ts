// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Physics extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__Physics"] = this;

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): Physics {
		return (gameObject as any)["__Physics"];
	}

	private gameObject: Phaser.GameObjects.Image;
	public bodyGravity: number = 0;

	/* START-USER-CODE */

  start() {
    this.gameObject.scene.physics.add.existing(this.gameObject)

    /** @type {Phaser.Physics.Arcade.Body} */
    /* @ts-ignore */
    const body: Phaser.Physics.Arcade.Body = this.gameObject.body
    body.setGravityY(this.bodyGravity)
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
