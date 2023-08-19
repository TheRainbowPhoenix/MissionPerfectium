// You can write more code here

/* START OF COMPILED CODE */

import UserComponent from "./UserComponent";
import Phaser from "phaser";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class PhysicsBody extends UserComponent {

	constructor(gameObject: Phaser.GameObjects.Image) {
		super(gameObject);

		this.gameObject = gameObject;
		(gameObject as any)["__PhysicsBody"] = this;

		/* START-USER-CTR-CODE */
    // Write your code here.
    /* END-USER-CTR-CODE */
	}

	static getComponent(gameObject: Phaser.GameObjects.Image): PhysicsBody {
		return (gameObject as any)["__PhysicsBody"];
	}

	private gameObject: Phaser.GameObjects.Image;
	public bodyX: number = 0;
	public bodyY: number = 0;
	public bodyWidth: number = 0;
	public bodyHeight: number = 0;

	/* START-USER-CODE */

  start() {
    /** @type {Phaser.Physics.Arcade.Body} */
    /* @ts-ignore */
    const body: Phaser.Physics.Arcade.Body = this.gameObject.body

    body.setOffset(this.bodyX, this.bodyY)
    body.setSize(this.bodyWidth, this.bodyHeight, false)
  }

  /* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
